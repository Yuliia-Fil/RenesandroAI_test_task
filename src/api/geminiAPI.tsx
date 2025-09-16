import { GoogleGenAI, Modality } from "@google/genai";

export const getImg = async (
  base64: string,
  prompt: string
): Promise<string> => {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const mimeType = "image/png";

  const contents = [
    {
      parts: [
        {
          inlineData: {
            mimeType,
            data: base64,
          },
        },
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model: "gemini-2.0-flash-preview-image-generation",
    config: {
      responseModalities: [Modality.IMAGE, Modality.TEXT],
    },
    contents,
  });

  for await (const chunk of response) {
    if (
      chunk.candidates &&
      chunk.candidates[0].content &&
      chunk.candidates[0].content.parts
    ) {
      for (const part of chunk.candidates[0].content.parts) {
        if (part.inlineData) {
          return part.inlineData.data ?? "no data";
        } else if (part.text) {
          return part.text;
        }
      }
    }
  }
  return "failed";
};
