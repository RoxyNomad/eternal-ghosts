// src/components/NoScrollHorizontal.tsx
"use client";
import { useEffect } from "react";

export default function NoScrollHorizontal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const originalOverflowX = document.body.style.overflowX;
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = originalOverflowX;
    };
  }, []);

  return <>{children}</>;
}
