"use server";

import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import { z } from "zod";

export async function generate(input) {
  "use server";

  const stream = createStreamableValue();

  (async () => {
    const { partialObjectStream } = await streamObject({
      model: openai("gpt-4-turbo"),
      system: "You generate fake data for three people",
      prompt: input,
      schema: z.object({
        people: z.array(
          z.object({
            name: z
              .string()
              .describe("name of a fake person"),
            address: z
              .string()
              .describe("US address format"),
            age: z.number()
          })
        )
      })
    });
    for await (const partialObject of partialObjectStream) {
      stream.update(partialObject);
    }
    stream.done();
  })();
  return { object: stream.value };
}
