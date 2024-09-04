"use client";

import { useState } from "react";
import { getAnswer } from "./actions";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={async () => {
          const { text } = await getAnswer(
            "What is the deepest lake in the US?"
          );
          setGeneration(text);
        }}
      >
        Ask!
      </button>
      <div>{generation}</div>
    </main>
  );
}
