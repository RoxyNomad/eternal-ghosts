// src/components/ZoomInLogo.tsx
"use client"; // Framer Motion benötigt Client-Side Rendering

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/ui/styles/components/ZoomInLogo.module.scss"; // Absolute Import für App Router

const ZoomInLogo = () => {
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }} // Startzustand der Animation
      animate={{ scale: 1, opacity: 1 }}   // Endzustand der Animation
      transition={{ duration: 7, ease: "easeOut" }} // Dauer & Ease
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

export default ZoomInLogo;
