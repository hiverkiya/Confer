import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import type { StorageActionWriter } from "convex/server";
import { assert } from "convex-helpers";
import { Id } from "../_generated/dataModel";
const AI_MODELS = {
  image: openai.chat("gpt-4o-mini"),
  pdf: openai.chat("gpt-4o"),
  html: openai.chat("gpt-4o"),
} as const;
const SUPPORTED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
] as const;
const SYSTEM_PROMPTS = {
  image:
    "You turn images into text.If it is a photo of a document, transcribe it. If it not a document, describe it.",
  pdf: "You transform PDF files into text. ",
  html: "You transform content into markdown.",
};
export type ExtractTextContentArgs = {
  storageId: Id<"_storage">;
  filename: string;
  bytes?: ArrayBuffer;
  mimeType: string;
};
export async function extractTextContent(
  ctx: { storage: StorageActionWriter },
  args: ExtractTextContentArgs,
): Promise<string> {
  const { storageId, filename, bytes, mimeType } = args;
  const url = await ctx.storage.getUrl(storageId);
  assert(url, "Failed to get storage URL");
  if (SUPPORTED_IMAGE_TYPES.some((type) => type === mimeType)) {
    return extractImageText(url);
  }
  if (mimeType.toLowerCase().includes("pdf")) {
    return extractPdfText(url, mimeType, filename);
  }
}
async function extractImageText(url: string): Promise<string> {
  const result = await generateText({
    model: AI_MODELS.image,
    system: SYSTEM_PROMPTS.image,
    messages: [
      {
        role: "user",
        content: [{ type: "image", image: new URL(url) }],
      },
    ],
  });
  return result.text;
}
