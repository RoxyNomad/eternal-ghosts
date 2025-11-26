// src/app/api/contact/route.ts
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// POST handler
export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // SMTP configuration (adjust for your email provider)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmx.ch",
      port: 587,
      secure: false,
      auth: {
        user: "eternal.ghosts@gmx.ch",
        pass: "dein-app-passwort", // <-- unbedingt anpassen!
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "eternal.ghosts@gmx.ch",
      subject,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
