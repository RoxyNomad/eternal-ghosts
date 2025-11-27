// src/components/ZoomOutLogo.tsx
"use client"; // Client-Komponente für Framer Motion

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/styles/ZoomOutLogo.module.css"; // Absolute Import für App Router

const ZoomOutLogo = () => {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }} // Startzustand der Animation
      animate={{ scale: 0.1, opacity: 0 }} // Endzustand der Animation
      transition={{ duration: 7, ease: "easeOut" }} // Dauer & Ease-Funktion
    >
      <Image 
        src="/pictures/favImage.png" 
        alt="Eternal Ghosts Logo" 
        className={styles.logo}  
        width={1075.2} 
        height={716.1}
      />
    </motion.div>
  );
};

export default ZoomOutLogo;
