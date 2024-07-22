"use client";

import { useCompletion } from "ai/react";

export default function Home() {
  const {
    completion,
    input,
    handleInputChange,
    handleSubmit
  } = useCompletion();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="What to do where"
          onChange={handleInputChange}
        />
      </form>
      {completion ? (
        <div>{completion}</div>
      ) : (
        <div>Recommend places to visit...</div>
      )}
    </main>
  );
}
