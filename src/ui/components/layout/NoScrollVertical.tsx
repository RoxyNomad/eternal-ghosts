// src/components/NoScrollVertical.tsx
"use client";
import { useEffect } from "react";

export default function NoScrollVertical({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const originalOverflowY = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = originalOverflowY;
    };
  }, []);

  return <>{children}</>;
}
