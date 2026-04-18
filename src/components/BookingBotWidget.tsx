"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

type ChatAction = {
  type: string;
  message: string;
  options: { label: string; type: string; value: string }[];
};

type Stage = "intro" | "emergency" | "services" | "chat";

const STORAGE_VISITOR = "jentech_bot_visitor";
const STORAGE_CONVO = "jentech_bot_convo";
const EMERGENCY_PHONE = "07 3914 9696";
const EMERGENCY_TEL = "tel:0739149696";

const SERVICES = [
  { label: "Commercial", prompt: "I need a commercial electrician." },
  { label: "Renovations", prompt: "I'm doing a renovation and need an electrician." },
  { label: "New Build", prompt: "I'm starting a new build and need an electrician." },
  { label: "Industrial", prompt: "I need an industrial electrician." },
  { label: "Air Conditioning", prompt: "I need help with air conditioning." },
  { label: "Smoke Alarms", prompt: "I need smoke alarms installed or checked." },
  { label: "Switchboards", prompt: "I need a switchboard upgrade or repair." },
  { label: "UPS Systems", prompt: "I'm interested in UPS / backup power systems." },
  { label: "Something else", prompt: "I need help with something else — can I describe it?" },
];

export default function BookingBotWidget() {
  const botUrl = process.env.NEXT_PUBLIC_BOOKING_BOT_URL;
  const businessId = process.env.NEXT_PUBLIC_BOOKING_BUSINESS_ID;

  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("intro");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [sending, setSending] = useState(false);
  const [action, setAction] = useState<ChatAction | null>(null);
  const [error, setError] = useState<string | null>(null);
  const conversationIdRef = useRef<string | null>(null);
  const visitorIdRef = useRef<string | null>(null);
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    visitorIdRef.current = localStorage.getItem(STORAGE_VISITOR);
    conversationIdRef.current = localStorage.getItem(STORAGE_CONVO);
    if (!visitorIdRef.current) {
      visitorIdRef.current = `visitor_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      localStorage.setItem(STORAGE_VISITOR, visitorIdRef.current);
    }
  }, []);

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [messages, action, stage]);

  if (!botUrl || !businessId) return null;

  async function send(text: string, opts: { hideUserBubble?: boolean } = {}) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    if (!opts.hideUserBubble) {
      setMessages((m) => [...m, { role: "user", content: trimmed }]);
    }
    setInput("");
    setAction(null);
    setError(null);
    setSending(true);

    try {
      const res = await fetch(`${botUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessId,
          visitorId: visitorIdRef.current,
          message: trimmed,
          conversationId: conversationIdRef.current,
        }),
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = await res.json();

      if (data.conversationId && data.conversationId !== conversationIdRef.current) {
        conversationIdRef.current = data.conversationId;
        localStorage.setItem(STORAGE_CONVO, data.conversationId);
      }

      setMessages((m) => [...m, { role: "assistant", content: data.response || "" }]);
      if (data.action) setAction(data.action);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Network error";
      setError(msg);
    } finally {
      setSending(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  function resetConversation() {
    conversationIdRef.current = null;
    localStorage.removeItem(STORAGE_CONVO);
    setMessages([]);
    setAction(null);
    setError(null);
    setInput("");
    setStage("intro");
  }

  function pickEmergency(isEmergency: boolean) {
    if (isEmergency) {
      setStage("emergency");
    } else {
      setStage("services");
    }
  }

  function pickService(service: { label: string; prompt: string }) {
    setStage("chat");
    setMessages([
      { role: "user", content: service.label },
      { role: "assistant", content: "Got it — one sec…" },
    ]);
    // Replace the placeholder with the real response
    (async () => {
      setSending(true);
      setError(null);
      try {
        const res = await fetch(`${botUrl}/api/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            businessId,
            visitorId: visitorIdRef.current,
            message: service.prompt,
            conversationId: conversationIdRef.current,
          }),
        });
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        const data = await res.json();
        if (data.conversationId && data.conversationId !== conversationIdRef.current) {
          conversationIdRef.current = data.conversationId;
          localStorage.setItem(STORAGE_CONVO, data.conversationId);
        }
        setMessages([
          { role: "user", content: service.label },
          { role: "assistant", content: data.response || "" },
        ]);
        if (data.action) setAction(data.action);
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Network error";
        setError(msg);
        setMessages([{ role: "user", content: service.label }]);
      } finally {
        setSending(false);
      }
    })();
  }

  return (
    <>
      {/* Floating toggle bubble */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open booking chat"}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        style={{
          background: "var(--neon)",
          color: "#000",
          boxShadow: "0 0 20px var(--neon-glow-strong), 0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-5 z-50 w-[min(22rem,calc(100vw-2.5rem))] h-[min(32rem,calc(100vh-8rem))] flex flex-col rounded-xl overflow-hidden"
          style={{
            background: "var(--surface-elevated)",
            border: "1px solid var(--border-light)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: "var(--surface-card)", borderBottom: "1px solid var(--border)" }}
          >
            <div>
              <div className="text-sm font-bold text-white">Jentech Booking</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                We&apos;ll get back to you quick
              </div>
            </div>
            <button
              type="button"
              onClick={resetConversation}
              aria-label="Start over"
              title="Start over"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--border)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div
            ref={threadRef}
            className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
            style={{ background: "var(--surface)" }}
          >
            {stage === "intro" && (
              <>
                <div
                  className="self-start max-w-[90%] px-3 py-2 rounded-2xl text-sm leading-relaxed"
                  style={{
                    background: "var(--surface-card)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border)",
                    borderBottomLeftRadius: 4,
                  }}
                >
                  G&apos;day — welcome to Jentech! Is this an emergency?
                </div>
                <div className="flex gap-2 mt-1">
                  <button
                    type="button"
                    onClick={() => pickEmergency(true)}
                    className="flex-1 px-4 py-3 rounded-lg text-sm font-bold"
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      boxShadow: "0 0 14px rgba(220, 38, 38, 0.4)",
                    }}
                  >
                    Yes — emergency
                  </button>
                  <button
                    type="button"
                    onClick={() => pickEmergency(false)}
                    className="flex-1 px-4 py-3 rounded-lg text-sm font-bold"
                    style={{ background: "var(--surface-card)", color: "var(--text-primary)", border: "1px solid var(--border-light)" }}
                  >
                    No
                  </button>
                </div>
              </>
            )}

            {stage === "emergency" && (
              <div className="flex flex-col items-center justify-center gap-4 h-full text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(220, 38, 38, 0.15)", border: "2px solid #dc2626" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="text-white text-base font-bold">Call us now — 24/7 line</div>
                <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  We&apos;ll dispatch a sparky straight away.
                </div>
                <a
                  href={EMERGENCY_TEL}
                  className="w-full px-4 py-4 rounded-lg text-center text-base font-bold"
                  style={{
                    background: "var(--neon)",
                    color: "#000",
                    boxShadow: "0 0 16px var(--neon-glow-strong)",
                  }}
                >
                  📞 {EMERGENCY_PHONE}
                </a>
                <button
                  type="button"
                  onClick={resetConversation}
                  className="text-xs"
                  style={{ color: "var(--text-muted)", textDecoration: "underline" }}
                >
                  Not an emergency — go back
                </button>
              </div>
            )}

            {stage === "services" && (
              <>
                <div
                  className="self-start max-w-[90%] px-3 py-2 rounded-2xl text-sm leading-relaxed"
                  style={{
                    background: "var(--surface-card)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border)",
                    borderBottomLeftRadius: 4,
                  }}
                >
                  How can we help you today?
                </div>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {SERVICES.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => pickService(s)}
                      className="px-3 py-3 rounded-lg text-sm font-medium text-left"
                      style={{
                        background: "var(--surface-card)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {stage === "chat" && (
              <>
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === "user" ? "self-end" : "self-start"
                    }`}
                    style={
                      m.role === "user"
                        ? { background: "var(--neon)", color: "#000", borderBottomRightRadius: 4 }
                        : {
                            background: "var(--surface-card)",
                            color: "var(--text-primary)",
                            border: "1px solid var(--border)",
                            borderBottomLeftRadius: 4,
                          }
                    }
                  >
                    {m.content}
                  </div>
                ))}

                {sending && (
                  <div
                    className="self-start px-3 py-2 rounded-2xl text-sm"
                    style={{ background: "var(--surface-card)", color: "var(--text-muted)" }}
                  >
                    …
                  </div>
                )}

                {error && (
                  <div className="self-center text-xs" style={{ color: "#fca5a5" }}>
                    {error}
                  </div>
                )}

                {action && action.options && action.options.length > 0 && (
                  <div
                    className="self-start max-w-[85%] px-3 py-2 rounded-2xl text-sm"
                    style={{
                      background: "var(--surface-card)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <div className="mb-2">{action.message}</div>
                    <div className="flex flex-wrap gap-2">
                      {action.options.map((opt, i) => {
                        const href =
                          opt.type === "email"
                            ? `mailto:${opt.value}`
                            : opt.type === "phone"
                              ? `tel:${opt.value.replace(/\s+/g, "")}`
                              : opt.value;
                        return (
                          <a
                            key={i}
                            href={href}
                            target={opt.type === "url" ? "_blank" : undefined}
                            rel={opt.type === "url" ? "noopener noreferrer" : undefined}
                            className="px-3 py-1 rounded text-xs font-medium"
                            style={{ background: "var(--neon)", color: "#000" }}
                          >
                            {opt.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input — hidden during emergency */}
          {stage !== "emergency" && (
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 px-3 py-3"
              style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border)" }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={stage === "chat" ? "Ask or book…" : "Or type your question…"}
                disabled={sending}
                onFocus={() => {
                  if (stage === "intro" || stage === "services") setStage("chat");
                }}
                className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                style={{
                  background: "var(--surface)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                }}
                aria-label="Chat message"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                className="px-4 py-2 rounded-lg text-sm font-bold disabled:opacity-40"
                style={{ background: "var(--neon)", color: "#000" }}
              >
                Send
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
