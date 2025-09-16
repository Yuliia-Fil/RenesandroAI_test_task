import { GoogleGenAI } from "@google/genai";
import type { RefObject } from "react";

import { imgBase64 } from "./imgTest";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCsFdsdDpuswcg-bscUIEflvZjeUyLr0wA", // Jeka
  //   apiKey: "AIzaSyAOoVVMQFiCO0gPnIHkk-J5eHAl3Pqu0LY", 2
  // apiKey: "AIzaSyAiZAxeBk1DlXuznzoJLVks9xMmNRODNrM", 1
});

export const generateCreative = async (
  imageRef: RefObject<HTMLImageElement | null>,
  promptText: string
) => {
  console.log(imageRef);

  if (!imageRef.current) {
    return;
  }

  //   const imgBase64 =
  //     "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/9VZ2+YAAAAASUVORK5CYII=";

  //   const prompt = [
  //     { text: "Make yellow background" },
  //     {
  //       inlineData: {
  //         mimeType: "image/png",
  //         data: imgBase64,
  //       },
  //     },
  //   ];

  const prompt =
    "A minimalist composition featuring a single, delicate red maple leaf. 20 x 20 pixels";

  //   Виклик моделі
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image-preview",
    contents: prompt,
  });

  console.log(response);
};
