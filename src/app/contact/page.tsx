// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import AnimatedLogo from "@/components/logo/RollInLogo";
import globalStyles from "@/styles/globals.module.css";
import contactStyles from "@/styles/contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus(res.ok ? "Your message has been sent!" : "Failed to send message");
      if (res.ok) setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className={globalStyles.html}>
      <main>
        {/* Navigation Header */}
        <header className={globalStyles.header}>
          <nav>
            {["news","band","live","gallery","tour","releases","media","links","contact"].map((link) => (
              <Link
                key={link}
                href={`/${link}`}
                className={clsx(globalStyles.siteTitle, link === "contact" && globalStyles.active)}
              >
                {link.toUpperCase()}
              </Link>
            ))}
          </nav>
        </header>

        {/* Animated Logo */}
        <section>
          <div className={clsx(globalStyles.logoContainer, contactStyles.logoContainer)}>
            <AnimatedLogo />
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className={contactStyles.contact}>
            <form onSubmit={handleSubmit}>
              <div className={contactStyles.contactForm}>
                <div className={contactStyles.contactFormLeft}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" className={contactStyles.name} name="name" value={formData.name} onChange={handleChange} required />

                  <label htmlFor="email">Email:</label>
                  <input type="email" className={contactStyles.email} name="email" value={formData.email} onChange={handleChange} required />

                  <label htmlFor="subject">Subject:</label>
                  <input type="text" className={contactStyles.subject} name="subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className={contactStyles.contactFormRight}>
                  <label htmlFor="message">Message:</label>
                  <textarea className={contactStyles.message} name="message" value={formData.message} onChange={handleChange} required></textarea>
                  <input className={contactStyles.submit} type="submit" value="Submit" />
                </div>
              </div>
            </form>
            {status && <p /*className={statusMessage}*/>{status}</p>}

            <div /*className={contactInfo}*/>
              <p>For any questions or inquiries, please contact us at</p>
              <p>Email: <a className={contactStyles.mailto} href="mailto: eternal.ghosts@gmx.ch">eternal.ghosts@gmx.ch</a></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
