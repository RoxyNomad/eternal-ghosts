// src/modules/auth/ui/components/LogoutButton.tsx

"use client";

import { useRouter } from "next/navigation";
import styles from "@/ui/styles/components/LogoutButton.module.scss";

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        await fetch("/api/auth/logout", {
            method: "POST",
        });

        router.push("/login");
        router.refresh();
    }

    return (
        <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
        </button>
    );
}