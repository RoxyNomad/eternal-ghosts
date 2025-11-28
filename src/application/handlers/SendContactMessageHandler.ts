// src/application/handlers/SendContactMessageHandler.ts

import { ContactMessage } from "@/domain/entities/ContactMessageEntity";
import { SendContactMessageCommand } from "@/application/commands/SendContactMessageCommand";
import { MailServicePort } from "@/application/ports/MailServicePort";

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
