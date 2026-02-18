import { Suspense } from "react";
import ProjetsClient from "./ProjetsClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ProjetsClient />
    </Suspense>
  );
}
