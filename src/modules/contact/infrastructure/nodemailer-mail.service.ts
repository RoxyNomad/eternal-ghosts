// src/infrastructure/services/nodemailer-mail.service.ts

import nodemailer from "nodemailer";
import { MailServicePort } from "@/modules/contact/application/mail-service.port";

export class NodemailerMailService implements MailServicePort {
  private transporter = nodemailer.createTransport({
    host: "smtp.gmx.ch",
    port: 587,
    secure: false,
    auth: {
      user: "eternal.ghosts@gmx.ch",
      pass: process.env.GMX_APP_PASSWORD!,
    },
  });

  async sendMail(params: { from: string; to: string; subject: string; html: string }) {
    await this.transporter.sendMail(params);
  }
}
