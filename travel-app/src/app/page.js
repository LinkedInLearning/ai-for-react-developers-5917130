"use client";

import { useState } from "react";
import { getData } from "./actions";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={async () => {
          const { people } = await getData(
            "people who sound like they have superhero names"
          );
          setGeneration(JSON.stringify(people, null, 2));
        }}
      >
        View People!
      </button>
      <pre>{generation}</pre>
    </main>
  );
}
