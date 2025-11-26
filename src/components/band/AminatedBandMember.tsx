// src/components/band/AminatedBandMember.tsx
"use client"; 
// ❗ Wichtig: Da Framer Motion im Browser laufen muss,
// wird diese Datei eine Client Component.

import { motion } from "framer-motion";
import styles from "@/styles/members.module.css";
import Image from "next/image";

/**
 * AnimatedBandMember Component
 * ----------------------------
 * Displays four band members with entrance animation.
 * Uses Framer Motion for scaling + fade-in effect.
 */
const AnimatedBandMember = () => {
  return (
    <motion.div
      // Initial animation values: starts tiny and invisible
      initial={{ scale: 0.1, opacity: 0 }}
      // Animation target: full size, fully visible
      animate={{ scale: 1, opacity: 1 }}
      // Animation configuration (7 seconds fade/scale in)
      transition={{ duration: 7, ease: "easeOut" }}
    >
      <div className={styles.bandMembers}>
        
        {/* Member 1 */}
        <div>
          <Image
            src="/pictures/055-2.png"
            alt="Eternal Ghosts - Filippo Milazzo"
            width={422.4}
            height={634.267}
            className={styles.bandMemberPicture}
          />
          <p className={styles.bandMember}>
            Filippo Milazzo<br />Guitars
          </p>
        </div>

        {/* Member 2 */}
        <div>
          <Image
            src="/pictures/065-2.png"
            alt="Eternal Ghosts - Christian Loser"
            width={422.4}
            height={634.267}
            className={styles.bandMemberPicture}
          />
          <p className={styles.bandMember}>
            Christian Loser<br />Bass
          </p>
        </div>

        {/* Member 3 */}
        <div>
          <Image
            src="/pictures/051-2.png"
            alt="Eternal Ghosts - John Landgraf"
            width={422.4}
            height={634.267}
            className={styles.bandMemberPicture}
          />
          <p className={styles.bandMember}>
            John Landgraf<br />Drum
          </p>
        </div>

        {/* Member 4 */}
        <div>
          <Image
            src="/pictures/061-2.png"
            alt="Eternal Ghosts - Rene Ninghetto"
            width={422.4}
            height={634.267}
            className={styles.bandMemberPicture}
          />
          <p className={styles.bandMember}>
            Rene Ninghetto<br />Vocals and Guitars
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default AnimatedBandMember;
