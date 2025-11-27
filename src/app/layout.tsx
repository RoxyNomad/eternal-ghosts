// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";

import "@/styles/globals.scss";

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
      </body>
    </html>
  );
}
