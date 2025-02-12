"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from '../styles/news.module.css'

const AnimatedPictureAndLogo = () => {
  return (
    <div>
      {/* Erstes animiertes Bild */}
      <motion.div
        initial={{ x: -1300, y: 670, opacity: 0, scale: 0.1 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 7, ease: "easeOut" }}
      >
        <Image 
          src="/pictures/015-2.png" 
          alt="Eternal Ghosts" 
          width={1382.4}
          height={1166.22}
          className={styles.Picture}
        />
      </motion.div>

      {/* Zweites animiertes Logo */}
      <motion.div
        initial={{ x: 950, y: 1000, opacity: 0, scale: 0.1 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 7, ease: "easeOut" }}
      >
        <Image 
          src="/pictures/favImage-2.png" 
          alt="Eternal Ghosts Logo" 
          width={1382.4}
          height={1166.22}
          className={styles.logoXL}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedPictureAndLogo;
