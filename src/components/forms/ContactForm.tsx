// src/components/forms/ContactForm.tsx
"use client";

import React, { useState } from "react";
import contactStyles from "@/styles/contact.module.css";

export default function ContactForm() {
  const [form] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    form[e.target.name as keyof typeof form] = e.target.value;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setStatus(res.ok ? "Your message has been sent!" : "Failed to send message");

      if (res.ok) {
        Object.keys(form).forEach((key) => (form[key as keyof typeof form] = ""));
        (e.target as HTMLFormElement).reset();
      }

    } catch {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className={contactStyles.contact}>
      <form onSubmit={handleSubmit}>
        <div className={contactStyles.contactForm}>
          
          {/* LEFT */}
          <div className={contactStyles.contactFormLeft}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className={contactStyles.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className={contactStyles.email} onChange={handleChange} required />

            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" className={contactStyles.subject} onChange={handleChange} required />
          </div>

          {/* RIGHT */}
          <div className={contactStyles.contactFormRight}>
            <label htmlFor="message">Message:</label>
            <textarea name="message" className={contactStyles.message} onChange={handleChange} required />

            <input className={contactStyles.submit} type="submit" value="Submit" />
          </div>

        </div>
      </form>

      {status && <p>{status}</p>}

      <div>
        <p>For any questions or inquiries, please contact us at</p>
        <p>
          Email: <a className={contactStyles.mailto} href="mailto: eternal.ghosts@gmx.ch">
            eternal.ghosts@gmx.ch
          </a>
        </p>
      </div>
    </div>
  );
}
