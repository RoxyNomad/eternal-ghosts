// src/infrastructure/services/NodemailerMailService.ts

import nodemailer from "nodemailer";
import { MailServicePort } from "@/application/ports/MailServicePort";

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
