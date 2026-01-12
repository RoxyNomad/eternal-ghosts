// src/domain/entities/contact-message.entity.ts

export class ContactMessage {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly subject: string,
    public readonly message: string
  ) {
    if (!name || !email || !subject || !message) {
      throw new Error("All fields are required.");
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email format.");
    }
  }
}
