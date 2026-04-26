import { NextRequest, NextResponse } from "next/server";
import { SITE } from "@/lib/site";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendViaResend(body: {
  from: string;
  to: string[];
  subject: string;
  html: string;
  reply_to?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY not configured");
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text().catch(() => "");
    throw new Error(`Resend failed: ${res.status} ${err}`);
  }
  return res.json();
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const phone = (payload.phone || "").trim();
  const message = (payload.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const fromAddr = process.env.CONTACT_FROM_ADDRESS || "Jentech Website <onboarding@resend.dev>";
  const toAddr = process.env.CONTACT_TO_ADDRESS || SITE.email;

  // 1. Notification email to Jentech
  const notifyHtml = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:640px">
      <h2 style="margin:0 0 16px">New website enquiry</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 16px 4px 0;color:#666">Name</td><td style="padding:4px 0">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#666">Email</td><td style="padding:4px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:4px 16px 4px 0;color:#666">Phone</td><td style="padding:4px 0"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>` : ""}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <div style="white-space:pre-wrap;padding:16px;background:#f7f7f7;border-radius:8px">${escapeHtml(message)}</div>
      <p style="color:#999;font-size:12px;margin-top:24px">Sent via ${SITE.url.replace(/^https?:\/\//, "")} contact form.</p>
    </div>
  `;

  // 2. Auto-reply to the customer
  const replyHtml = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:640px">
      <p>Hi ${escapeHtml(name.split(" ")[0] || name)},</p>
      <p>Thanks for getting in touch with Jentech Electrical — we've received your message and will get back to you during our office hours:</p>
      <p style="padding:12px 16px;background:#f2f8ea;border-left:3px solid #88BD40;border-radius:4px">
        <strong>Mon–Fri, 9:00am–4:00pm</strong>
      </p>
      <p>If you need <strong>emergency electrical assistance right now</strong>, please call <a href="tel:0739149696" style="color:#88BD40;font-weight:600">07 3914 9696</a> and follow the prompts — you'll be connected to our on-call electrician.</p>
      <p>Speak soon,<br/>The Jentech Electrical team</p>
      <hr style="border:0;border-top:1px solid #eee;margin:24px 0"/>
      <p style="color:#999;font-size:12px;margin:0">
        Jentech Electrical · 6/190 Station Rd, Yeerongpilly QLD 4105<br/>
        07 3914 9696 · info@jentechelectrical.com.au<br/>
        QLD Licence 80766 · RTA AU068040 · ABN 46 611 087 462
      </p>
    </div>
  `;

  try {
    await sendViaResend({
      from: fromAddr,
      to: [toAddr],
      subject: `New enquiry from ${name}`,
      html: notifyHtml,
      reply_to: email,
    });

    // auto-reply — best-effort, don't fail the whole request if this fails
    try {
      await sendViaResend({
        from: fromAddr,
        to: [email],
        subject: "Thanks for contacting Jentech Electrical",
        html: replyHtml,
      });
    } catch (err) {
      console.error("Auto-reply failed:", err);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    const msg = err instanceof Error ? err.message : "Unknown error";
    // DEBUG: surface underlying error while we smoke-test the Resend setup
    return NextResponse.json(
      {
        error: "Failed to send message. Please call us directly on 07 3914 9696.",
        debug: msg,
      },
      { status: 500 }
    );
  }
}
