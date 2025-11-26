// src/application/commands/SendContactMessageHandler.ts
import nodemailer from "nodemailer";
import { SendContactMessageCommand } from "@/domain/commands/SendContactMessageCommand";

export class SendContactMessageHandler {
  async execute(command: SendContactMessageCommand) {
    const { name, email, subject, message } = command.props;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmx.ch",
      port: 587,
      secure: false,
      auth: {
        user: "eternal.ghosts@gmx.ch",
        pass: process.env.GMX_APP_PASSWORD, // ENV-Variable nutzen!
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "eternal.ghosts@gmx.ch",
      subject,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p>${message}</p>`,
    });

    return { success: true };
  }
}
