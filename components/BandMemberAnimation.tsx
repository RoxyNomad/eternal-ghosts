import { motion } from "framer-motion";
import styles from '../styles/members.module.css'
import Image from "next/image";

const AnimatedBandMember = () => {

  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }} // Startwerte der Animation
      animate={{ scale: 1, opacity: 1 }} // Zielwerte der Animation
      transition={{ duration: 7, ease: "easeOut" }} // Animationsdauer & Timing-Funktion
    >
      <div className={styles.bandMembers}>
        <div>
          <Image 
            src="/pictures/055-2.png" 
            alt="Eternal Ghosts"  
            width={422.4} 
            height={634.267}
            className={styles.bandMemberPicture}
          />
          <p className={styles.bandMember}>Filippo Milazzo<br />Guitars</p>
        </div>
        <div>
          <Image 
            src="/pictures/065-2.png" 
            alt="Eternal Ghosts"  
            width={422.4} 
            height={634.267}
            className={styles.bandMemberPicture}
          />
          <p className={styles.bandMember}>Christian Loser<br />Bass</p>
        </div>
        <div>
          <Image 
            src="/pictures/051-2.png" 
            alt="Eternal Ghosts"  
            width={422.4} 
            height={634.267}
            className={styles.bandMemberPicture}
          />
          <p className={styles.bandMember}>John Landgraf<br />Drum</p>
        </div>
        <div>
          <Image 
            src="/pictures/061-2.png" 
            alt="Eternal Ghosts"  
            width={422.4} 
            height={634.267}
            className={styles.bandMemberPicture}
          />
          <p className={styles.bandMember}>Rene Ninghetto<br />Vocals and Guitars</p>
        </div>
      </div>
      
    </motion.div>
  );
};

export default AnimatedBandMember;

