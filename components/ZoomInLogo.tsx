import { motion } from "framer-motion";
import Image from "next/image";
import styles from '../styles/live.module.css'

const AnimatedLogo = () => {
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }} // Startzustand der Animation
      animate={{ scale: 1, opacity: 1 }} // Endzustand der Animation
      transition={{ duration: 7, ease: "easeOut" }} // Animationsdauer & Ease-Funktion
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

export default AnimatedLogo;
