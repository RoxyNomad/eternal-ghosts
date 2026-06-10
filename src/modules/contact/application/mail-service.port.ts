// src/application/ports/mail-service.port.ts

export interface MailServicePort {
  sendMail(params: {
    from: string;
    to: string;
    subject: string;
    html: string;
  }): Promise<void>;
}
