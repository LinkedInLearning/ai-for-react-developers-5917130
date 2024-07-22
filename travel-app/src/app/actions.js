"use server";

import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function getAnswer(question) {
  const { text } = await generateText({
    model: openai("gpt-3.5-turbo"),
    prompt: question
  });
  return { text };
}
