// src/ui/components/forms/ContactForm.tsx
"use client";

import React, { useState } from "react";
import styles from "@/ui/styles/components/ContactForm.module.scss";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setStatus(data.success ? "Your message has been sent!" : data.error);

    if (data.success) {
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className={styles.contact}>
      <form onSubmit={handleSubmit}>
        <div className={styles.contactForm}>

          {/* LEFT */}
          <div className={styles.contactFormLeft}>
            <label>Name:</label>
            <input name="name" value={form.name} onChange={handleChange} required />

            <label>Email:</label>
            <input name="email" value={form.email} onChange={handleChange} required />

            <label>Subject:</label>
            <input name="subject" value={form.subject} onChange={handleChange} required />
          </div>

          {/* RIGHT */}
          <div className={styles.contactFormRight}>
            <label>Message:</label>
            <textarea name="message" value={form.message} onChange={handleChange} required />

            <input className={styles.submit} type="submit" value="Submit" />
          </div>

        </div>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}
