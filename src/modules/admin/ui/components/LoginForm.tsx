// src/modules/auth/ui/components/LoginForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "@/ui/styles/components/LoginForm.module.scss"
export default function LoginForm() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        const response = await fetch(
            "/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );

        if (!response.ok) {
            setError(
                "Invalid credentials"
            );
            return;
        }

        router.push("/admin");
    }

    return (
        <div className={styles.login}>
            <h1>Admin Login</h1>

            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <input
                    type="email"
										name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                <button type="submit" className={styles.submit}>
                    Login
                </button>

                {error && (
                    <p>{error}</p>
                )}
            </form>
        </div>
    );
}