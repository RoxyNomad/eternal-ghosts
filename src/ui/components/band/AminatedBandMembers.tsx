// src/ui/components/band/AnimatedBandMembers.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/ui/styles/components/Members.module.scss";

interface BandMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export default function AnimatedBandMembers() {
  const [members, setMembers] = useState<BandMember[]>([]);

  useEffect(() => {
    fetch("/api/band-members")
      .then((res) => res.json())
      .then(setMembers)
      .catch((err) => console.error("Failed to fetch members:", err));
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 7, ease: "easeOut" }}
    >
      <div className={styles.bandMembers}>
        {members.map((member) => (
          <div key={member.id}>
            <Image
              src={member.imageUrl}
              alt={`Eternal Ghosts - ${member.name}`}
              width={422.4}
              height={634.267}
              className={styles.bandMemberPicture}
            />
            <p className={styles.bandMember}>
              {member.name}
              <br />
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
