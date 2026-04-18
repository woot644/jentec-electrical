"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

type ChatAction = {
  type: string;
  message: string;
  options: { label: string; type: string; value: string }[];
};

const STORAGE_VISITOR = "jentech_bot_visitor";
const STORAGE_CONVO = "jentech_bot_convo";

export default function BookingBotWidget() {
  const botUrl = process.env.NEXT_PUBLIC_BOOKING_BOT_URL;
  const businessId = process.env.NEXT_PUBLIC_BOOKING_BUSINESS_ID;

  const [open, setOpen] = useState(false);
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
  }, [messages, action]);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "G'day — I'm Jentech's booking assistant. Ask me about our services, or let me book a sparky for you. What do you need?",
        },
      ]);
    }
  }, [open, messages.length]);

  if (!botUrl || !businessId) return null;

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    setMessages((m) => [...m, { role: "user", content: trimmed }]);
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
              className="text-xs hover:underline"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Start a new chat"
            >
              New chat
            </button>
          </div>

          {/* Messages */}
          <div
            ref={threadRef}
            className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2"
            style={{ background: "var(--surface)" }}
          >
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
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 px-3 py-3"
            style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border)" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask or book…"
              disabled={sending}
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
        </div>
      )}
    </>
  );
}
