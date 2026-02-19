"use client";

import { useEffect } from "react";

export default function Polyfills() {
  useEffect(() => {
    // Polyfill IntersectionObserver pour vieux navigateurs / environnements d’entreprise
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("intersection-observer");
  }, []);

  return null;
}
