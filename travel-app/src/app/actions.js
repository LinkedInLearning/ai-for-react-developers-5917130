"use server";

import { streamUI } from "ai";
import { openai } from "@ai-sdk/openai";

export async function streamComponent() {
  const result = await streamUI({
    model: openai("gpt-4o"),
    prompt:
      "Give me some advice on how to plan a trip to Telluride, Colorado",
    text: ({ content }) => <div>{content}</div>
  });
  return result.value;
}
