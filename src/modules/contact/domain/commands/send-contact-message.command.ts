// src/domain/commands/send-contact-message.command.ts
export interface SendContactMessageCommandProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class SendContactMessageCommand {
  constructor(public readonly props: SendContactMessageCommandProps) {}
}
