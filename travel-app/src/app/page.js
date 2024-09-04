"use client";

import { useState } from "react";
import { streamComponent } from "./actions";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [component, setComponent] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setComponent(await streamComponent());
        }}
      >
        <button>Get Component</button>
      </form>
      <div>{component}</div>
    </div>
  );
}
