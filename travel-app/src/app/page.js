"use client";

import { useState } from "react";
import { streamComponent } from "./actions";
import { FancyButton } from "../components/fancy-button.jsx";

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
        <FancyButton />
      </form>
      <div>{component}</div>
    </div>
  );
}
