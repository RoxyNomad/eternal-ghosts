// src/application/handlers/send-contact-message.handler.ts

import { ContactMessage } from "@/modules/contact/domain/entities/contact-message.entity";
import { SendContactMessageCommand } from "@/modules/contact/domain/commands/send-contact-message.command";
import { MailServicePort } from "@/modules/contact/application/mail-service.port";

export class SendContactMessageHandler {
  constructor(private readonly mailService: MailServicePort) {}

  async execute(command: SendContactMessageCommand) {
    // 1. Create domain entity (validation happens inside)
    const msg = new ContactMessage(
      command.props.name,
      command.props.email,
      command.props.subject,
      command.props.message
    );

    // 2. Create email template
    const html = `
      <p><strong>Name:</strong> ${msg.name}</p>
      <p><strong>Email:</strong> ${msg.email}</p>
      <p><strong>Subject:</strong> ${msg.subject}</p>
      <p>${msg.message}</p>
    `;

    // 3. Call mail service (infrastructure)
    await this.mailService.sendMail({
      from: `"${msg.name}" <${msg.email}>`,
      to: "eternal.ghosts@gmx.ch",
      subject: msg.subject,
      html,
    });

    return { success: true };
  }
}
