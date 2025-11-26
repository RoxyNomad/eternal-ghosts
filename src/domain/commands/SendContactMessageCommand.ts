// src/domain/commands/SendContactMessageCommand.ts
export interface SendContactMessageCommandProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class SendContactMessageCommand {
  constructor(public readonly props: SendContactMessageCommandProps) {}
}
