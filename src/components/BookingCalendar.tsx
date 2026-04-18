"use client";

import { useEffect, useMemo, useState } from "react";

type DayAvailability = {
  date: string;
  status: "open" | "partial" | "limited" | "full" | "closed";
  slotsFree: number;
  slotsTotal: number;
};

type Slot = { time: string; label: string; available: boolean };

type DayDetail = {
  date: string;
  status: string;
  slots: Slot[];
};

type Props = {
  botUrl: string;
  businessId: string;
  onPick: (isoDate: string, label: string) => void;
  onClose: () => void;
};

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_LABELS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function ymd(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function prettyDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });
}

export default function BookingCalendar({ botUrl, businessId, onPick, onClose }: Props) {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const [viewMonth, setViewMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [month, setMonth] = useState<Map<string, DayAvailability>>(new Map());
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [day, setDay] = useState<DayDetail | null>(null);
  const [dayLoading, setDayLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    const start = ymd(viewMonth);
    fetch(`${botUrl}/api/availability/${businessId}/month?start=${start}&days=42`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (!active) return;
        const m = new Map<string, DayAvailability>();
        for (const d of data.days) m.set(d.date, d);
        setMonth(m);
      })
      .catch((e) => {
        if (active) setError(e instanceof Error ? e.message : "Failed to load availability");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [botUrl, businessId, viewMonth]);

  useEffect(() => {
    if (!selectedDate) {
      setDay(null);
      return;
    }
    let active = true;
    setDayLoading(true);
    fetch(`${botUrl}/api/availability/${businessId}/day/${selectedDate}`)
      .then((r) => r.json())
      .then((data) => {
        if (active) setDay(data);
      })
      .finally(() => {
        if (active) setDayLoading(false);
      });
    return () => {
      active = false;
    };
  }, [botUrl, businessId, selectedDate]);

  const cells = useMemo(() => {
    const first = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1);
    const startDow = first.getDay();
    const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();
    const out: ({ date: Date; info?: DayAvailability } | null)[] = [];
    for (let i = 0; i < startDow; i++) out.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), d);
      out.push({ date, info: month.get(ymd(date)) });
    }
    while (out.length % 7 !== 0) out.push(null);
    return out;
  }, [viewMonth, month]);

  function goPrev() {
    const prev = new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1);
    if (prev < new Date(today.getFullYear(), today.getMonth(), 1)) return;
    setViewMonth(prev);
    setSelectedDate(null);
  }
  function goNext() {
    const next = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1);
    // limit browsing to 2 months ahead
    const maxMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1);
    if (next > maxMonth) return;
    setViewMonth(next);
    setSelectedDate(null);
  }

  function dayColor(info: DayAvailability | undefined, isPast: boolean) {
    if (isPast) return { bg: "transparent", color: "var(--text-muted)", border: "1px solid transparent" };
    if (!info) return { bg: "var(--surface-card)", color: "var(--text-secondary)", border: "1px solid var(--border)" };
    if (info.status === "closed") return { bg: "rgba(100,100,100,0.2)", color: "var(--text-muted)", border: "1px solid var(--border)" };
    if (info.status === "full") return { bg: "rgba(220, 38, 38, 0.15)", color: "#fca5a5", border: "1px solid rgba(220,38,38,0.4)" };
    if (info.status === "limited") return { bg: "rgba(234, 179, 8, 0.15)", color: "#fde68a", border: "1px solid rgba(234,179,8,0.4)" };
    // open / partial
    return { bg: "rgba(136, 189, 64, 0.15)", color: "var(--neon)", border: "1px solid rgba(136,189,64,0.4)" };
  }

  return (
    <div
      className="absolute inset-0 z-10 flex flex-col"
      style={{ background: "var(--surface-elevated)" }}
    >
      {/* Calendar header */}
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ background: "var(--surface-card)", borderBottom: "1px solid var(--border)" }}
      >
        <button
          type="button"
          onClick={goPrev}
          disabled={viewMonth.getMonth() === today.getMonth() && viewMonth.getFullYear() === today.getFullYear()}
          className="w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-30"
          style={{ color: "var(--text-secondary)" }}
          aria-label="Previous month"
        >
          ‹
        </button>
        <div className="text-sm font-bold text-white">
          {MONTH_LABELS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
        </div>
        <button
          type="button"
          onClick={goNext}
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ color: "var(--text-secondary)" }}
          aria-label="Next month"
        >
          ›
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close calendar"
          className="ml-2 text-xs px-2 py-1 rounded"
          style={{ background: "var(--surface)", color: "var(--text-secondary)", border: "1px solid var(--border-light)" }}
        >
          Back to chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3" style={{ background: "var(--surface)" }}>
        {/* Weekday header */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {DAY_LABELS.map((d) => (
            <div key={d} className="text-center text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>
              {d}
            </div>
          ))}
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7 gap-1">
          {cells.map((cell, i) => {
            if (!cell) return <div key={i} />;
            const isPast = cell.date < today;
            const key = ymd(cell.date);
            const isSelected = selectedDate === key;
            const info = cell.info;
            const c = dayColor(info, isPast);
            const clickable = !isPast && info && info.status !== "closed" && info.status !== "full";

            return (
              <button
                key={i}
                type="button"
                disabled={!clickable}
                onClick={() => clickable && setSelectedDate(key)}
                className="aspect-square rounded-md flex flex-col items-center justify-center text-xs transition-transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
                style={{
                  background: isSelected ? "var(--neon)" : c.bg,
                  color: isSelected ? "#000" : c.color,
                  border: isSelected ? "2px solid var(--neon)" : c.border,
                  fontWeight: 600,
                }}
                aria-label={`${cell.date.toDateString()} — ${info?.status || "unknown"}`}
              >
                <span>{cell.date.getDate()}</span>
                {info && info.status !== "closed" && info.status !== "full" && !isPast && (
                  <span className="text-[9px] mt-0.5" style={{ opacity: isSelected ? 0.7 : 0.8 }}>
                    {info.slotsFree}/{info.slotsTotal}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-3 mt-3 text-[10px]" style={{ color: "var(--text-muted)" }}>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--neon)" }} /> Open
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ background: "#eab308" }} /> Limited
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ background: "#dc2626" }} /> Full
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--border-light)" }} /> Closed
          </span>
        </div>

        {loading && <div className="text-xs text-center mt-3" style={{ color: "var(--text-muted)" }}>Loading…</div>}
        {error && <div className="text-xs text-center mt-3" style={{ color: "#fca5a5" }}>{error}</div>}

        {/* Time slots for selected day */}
        {selectedDate && (
          <div className="mt-4">
            <div className="text-sm font-bold text-white mb-2">
              Times for {prettyDate(selectedDate)}
            </div>
            {dayLoading && <div className="text-xs" style={{ color: "var(--text-muted)" }}>Loading…</div>}
            {day && (
              <div className="grid grid-cols-3 gap-2">
                {day.slots.map((s) => (
                  <button
                    key={s.time}
                    type="button"
                    disabled={!s.available}
                    onClick={() => onPick(selectedDate, `${prettyDate(selectedDate)} at ${s.label}`)}
                    className="py-2 rounded-lg text-xs font-medium disabled:opacity-30 disabled:cursor-not-allowed"
                    style={
                      s.available
                        ? { background: "var(--surface-card)", color: "var(--neon)", border: "1px solid rgba(136,189,64,0.4)" }
                        : { background: "var(--surface-card)", color: "var(--text-muted)", border: "1px solid var(--border)", textDecoration: "line-through" }
                    }
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
