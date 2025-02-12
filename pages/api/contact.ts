import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, subject, message } = req.body;

  // SMTP-Konfiguration (Anpassen für deinen E-Mail-Anbieter)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmx.ch",
    port: 587,
    secure: false,
    auth: {
      user: "eternal.ghosts@gmx.ch",
      pass: "dein-app-passwort",
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "eternal.ghosts@gmx.ch",
      subject: subject,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
}
