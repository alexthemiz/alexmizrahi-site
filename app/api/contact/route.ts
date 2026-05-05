import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, visitingFrom, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "alexmiz@gmail.com",
      subject: `Guestbook: ${name}`,
      text: `Name: ${name}\nVisiting from: ${visitingFrom}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
