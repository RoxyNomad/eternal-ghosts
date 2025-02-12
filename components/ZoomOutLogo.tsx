import { motion } from "framer-motion";
import Image from "next/image";
import styles from '../styles/media.module.css'

const AnimatedLogo = () => {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }} // Startzustand der Animation
      animate={{ scale: 0.1, opacity: 0 }} // Endzustand der Animation
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
