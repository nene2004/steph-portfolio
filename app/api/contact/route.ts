import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Server missing RESEND_API_KEY." },
        { status: 500 }
      );
    }

    // IMPORTANT:
    // For a free Resend account, you often must send "from" using onboarding@resend.dev
    // until you verify a domain.
    const from = "StephenieMichael <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO_EMAIL || "stepheniemike04@gmail.com";

    const subject = `Portfolio message from ${name}`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5;">
        <h2>New Portfolio Message</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone || "—")}</p>
        <hr/>
        <p style="white-space: pre-wrap;"><b>Message:</b><br/>${escapeHtml(message)}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email, // so you can reply directly to them
      subject,
      html,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message || "Email failed to send." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}

// basic HTML escaping (prevents injection)
function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}