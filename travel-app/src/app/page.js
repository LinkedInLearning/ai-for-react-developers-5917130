"use client";

import { useState } from "react";
import { generate } from "./actions";
import { readStreamableValue } from "ai/rsc";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState("");
  return (
    <div>
      <button
        onClick={async () => {
          const { object } = await generate(
            "people who have very superhero-like names"
          );
          for await (const partialObject of readStreamableValue(
            object
          )) {
            if (partialObject) {
              setGeneration(
                JSON.stringify(
                  partialObject.people,
                  null,
                  2
                )
              );
            }
          }
        }}
      >
        View People!
      </button>
      <pre>{generation}</pre>
    </div>
  );
}
