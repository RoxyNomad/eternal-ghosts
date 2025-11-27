// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";

import "@/styles/globals.module.css";
import "@/styles/band.module.css";
import "@/styles/biography.module.css";
import "@/styles/contact.module.css";
import "@/styles/gallery.module.css";
import "@/styles/links.module.css";
import "@/styles/live.module.css";
import "@/styles/media.module.css";
import "@/styles/members.module.css";
import "@/styles/news.module.css";
import "@/styles/releases.module.css";
import "@/styles/tour.module.css";
import "@/styles/terms.module.css";



// Local Font Migration
const myFont = localFont({
  src: [
    {
      path: "/fonts/bravada-arma.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/bravada-arma.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--bravada-arma",
});

// Metadata replaces <Head>
export const metadata: Metadata = {
  title: "Eternal Ghosts",
  description: "Eternal Ghosts",
  authors: [
    { name: "Roxana Zwicky" },
    { name: "Filippo Milazzo" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={myFont.variable}
        style={{ minHeight: "100vh" }}
      >
        {/* Background Image */}
        <Image
          src="/pictures/bg.jpeg"
          alt="Eternal Ghosts Background"
          priority
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
          width='1920'
          height='1080'
        />

        {/* Page Content */}
        {children}

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            position: "relative",
            bottom: '2vh',
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              color: "white",
              margin: "0",
            }}
          >
            © 2023 Eternal Ghosts, All Rights Reserved.
          </p>
        </div>
      </body>
    </html>
  );
}
