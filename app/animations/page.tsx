"use client";

import { useLang } from "@/components/shared/LanguageProvider";
import { t } from "@/data/i18n";

export default function AnimationsPage() {
  const { lang } = useLang();

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-default)" }}>
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          paddingTop: 80,
        }}
      >
        <h1>{t(lang, "animations.soon")}</h1>
      </div>
    </main>
  );
}
