import type { Creative } from "../types";

export const getCreativeSrc = (creative: Creative): string => {
  return creative.editedBase64
    ? `data:image/png;base64,${creative.editedBase64}`
    : creative.img;
};
