import { motion } from "framer-motion";
import Image from 'next/image';
import styles from '../styles/band.module.css'

const getRandomDirection = () => {
  const directions = ["top", "bottom", "left", "right"];
  return directions[Math.floor(Math.random() * directions.length)];
};

const getInitialPosition = () => {
  if (typeof window === "undefined") return { x: 0, y: 0 }; // Sicherheitscheck für SSR

  const direction = getRandomDirection();
  let x: number, y: number;

  switch (direction) {
    case "top":
      x = Math.random() * window.innerWidth;
      y = -100;
      break;
    case "bottom":
      x = Math.random() * window.innerWidth;
      y = window.innerHeight + 100;
      break;
    case "left":
      x = -window.innerWidth;
      y = Math.random() * window.innerHeight;
      break;
    case "right":
      x = window.innerWidth + 100;
      y = Math.random() * window.innerHeight;
      break;
    default:
      x = 0;
      y = 0;
  }

  return { x, y };
};

const AnimatedLogo = () => {
  const { x, y } = getInitialPosition();
  const randomRotation = Math.random() < 0.5 ? -720 : 720; // Zufällige Rotation

  return (
    <motion.div
      initial={{ x, y, opacity: 0, scale: 0.01, rotate: randomRotation }}
      animate={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      <Image src="/pictures/favImage.png" alt="Eternal Ghosts Logo" className={styles.logo} width={1075.2} height={716.1}/>
      
    </motion.div>
  );
};

export default AnimatedLogo;
