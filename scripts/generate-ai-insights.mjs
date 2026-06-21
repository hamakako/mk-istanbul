import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputPath = resolve("src/data/ai-insights.json");
const apiKey = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_MODEL || "gemini-3.5-flash";

const fallback = {
  istanbul: [],
  dubai: []
};

function safeJson(text) {
  const cleaned = text
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();

  return JSON.parse(cleaned);
}

function isValidShape(value) {
  return (
    value &&
    ["istanbul", "dubai"].every((city) =>
      Array.isArray(value[city]) &&
      value[city].every(
        (item) =>
          typeof item.title === "string" &&
          typeof item.text === "string" &&
          Array.isArray(item.badges) &&
          item.badges.every((badge) => typeof badge === "string")
      )
    )
  );
}

async function writeFallback(reason) {
  await writeFile(outputPath, `${JSON.stringify(fallback, null, 2)}\n`);
  console.log(`AI insights fallback written: ${reason}`);
}

if (!apiKey) {
  await writeFallback("GEMINI_API_KEY is not set");
  process.exit(0);
}

const prompt = `
You are improving a Kurdish Sorani travel website for MK Business and Travel.
Return only JSON. No markdown.

Create monthly travel trend guidance for Kurdish tourists visiting Istanbul and Dubai.
Current month context: June 2026 summer travel.
Keep the text clear, short, practical, family-friendly, and written in Kurdish Sorani.

JSON shape:
{
  "istanbul": [
    { "title": "...", "text": "...", "badges": ["...", "...", "..."] }
  ],
  "dubai": [
    { "title": "...", "text": "...", "badges": ["...", "...", "..."] }
  ]
}

Rules:
- exactly 2 items per city
- each title under 55 Kurdish characters
- each text under 190 Kurdish characters
- each badges array exactly 3 short Kurdish labels
- include restaurants/cafes trend where useful
- mention summer comfort for Dubai
- mention Bosphorus/old city timing for Istanbul
`;

try {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.5
      }
    })
  });

  if (!response.ok) {
    await writeFallback(`Gemini request failed with ${response.status}`);
    process.exit(0);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("") || "";
  const parsed = safeJson(text);

  if (!isValidShape(parsed)) {
    await writeFallback("Gemini response shape was invalid");
    process.exit(0);
  }

  await writeFile(outputPath, `${JSON.stringify(parsed, null, 2)}\n`);
  console.log("AI insights generated with Gemini.");
} catch (error) {
  await writeFallback(`Gemini generation skipped: ${error instanceof Error ? error.message : "unknown error"}`);
}
