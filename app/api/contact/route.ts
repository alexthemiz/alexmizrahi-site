import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, visitingFrom, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "alexmiz@gmail.com",
      replyTo: email || undefined,
      subject: `Guestbook message from ${name}`,
      text: `Name: ${name}\nEmail: ${email || "(not provided)"}\nVisiting from: ${visitingFrom || "(not provided)"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
