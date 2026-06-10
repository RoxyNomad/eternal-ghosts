// src/hooks/useDisableScroll.ts
import { useEffect } from "react";

/**
 * Disable page scrolling while the hook is active.
 * Usage: Just call `useDisableScroll(true)` on the page where scrolling should be disabled.
 */
export default function useDisableScroll(active: boolean = true) {
  useEffect(() => {
    if (!active) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [active]);
}
