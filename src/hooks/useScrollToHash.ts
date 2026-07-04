import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../utils/scroll";

export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    const id = hash.replace(/^#/, "");
    if (!id) return;

    const frame = requestAnimationFrame(() => {
      scrollToSection(id);
    });

    return () => cancelAnimationFrame(frame);
  }, [hash]);
}
