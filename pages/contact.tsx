"use client"; // Falls du Next.js 13+ mit App Router nutzt

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import clsx from 'clsx';
import { useState } from 'react';
import AnimatedLogo from '@/components/RollInLogo';
import globalStyles from '../styles/globals.module.css';
import contactStyles from '../styles/contact.module.css';

const Contact: React.FC = () => {
  // Form State für Name, E-Mail, Betreff und Nachricht
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Statusanzeige (Erfolg/Fehler)

  // Handler für Eingabeänderungen
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formular absenden
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Your message has been sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send the message.");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className={globalStyles.html}>
      <Head>
        <title>Eternal Ghosts contact</title>
      </Head>

      <main>
        <header className={globalStyles.header}>
          <nav>
            <Link href="/news" className={globalStyles.siteTitle}>NEWS</Link>
            <Link href="/band" className={globalStyles.siteTitle}>BAND</Link>
            <Link href="/live" className={globalStyles.siteTitle}>LIVE</Link>
            <Link href="/gallery" className={globalStyles.siteTitle}>GALLERY</Link>
            <Link href="/tour" className={globalStyles.siteTitle}>TOUR</Link>
            <Link href="/releases" className={globalStyles.siteTitle}>RELEASES</Link>
            <Link href="/media" className={globalStyles.siteTitle}>MEDIA</Link>
            <Link href="/links" className={globalStyles.siteTitle}>LINKS</Link>
            <Link href="/contact" className={clsx(globalStyles.siteTitle, globalStyles.active)}>CONTACT</Link>
          </nav>
        </header>

        <section>
        <div className={clsx(globalStyles.logoContainer, contactStyles.logoContainer)}>
          <AnimatedLogo />
        </div>
        <div className={contactStyles.navPageBar}>
        <p className={contactStyles.navPageTitle}>CONTACT</p>
          <div>
            <Link href='https://www.facebook.com/profile.php?id=61573032031881'>
              <Image src="/pictures/facebook-icon.png" alt="Eternal Ghosts Facebook" className={contactStyles.facebookIcon} width={94.1084} height={94.1083}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.youtube.com/watch?v=B_YRm7NKeas" >
              <Image src="/pictures/youtube-icon.png"  className={contactStyles.youtubeIcon} alt="Eternal Ghosts Youtube" width={94.1084} height={94.1083}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/eternalghosts0/">
              <Image src="/pictures/instagram-icon.png" className={contactStyles.instagramIcon} alt="Eternal Ghosts Instagram" width={94.1084} height={94.1083}/>
            </Link>
          </div>
        </div>
      </section>

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

        <footer className={globalStyles.footer}>
          {/* Optional footer content */}
        </footer>
      </main>
    </div>
  );
};

export default Contact;
