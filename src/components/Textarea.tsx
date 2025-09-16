import type { RefObject } from "react";
import { getImg } from "../api/geminiAPI";
import { getBase64 } from "../api/getBase64";

type Props = {
  prompt: string;
  setPrompt: (p: string) => void;
  imageRef: RefObject<HTMLImageElement | null>;
  setEditedBase64: (b: string) => void;
  setLoading: (l: boolean) => void;
  setErrorMessage: (m: string) => void;
};

export const TextArea = ({
  prompt,
  setPrompt,
  imageRef,
  setEditedBase64,
  setLoading,
  setErrorMessage,
}: Props) => {
  const editImage = async () => {
    if (!imageRef.current) return;

    try {
      setLoading(true);
      const startBase64 = getBase64(imageRef.current);
      const base64 = await getImg(startBase64, prompt);
      console.log(base64);
      setEditedBase64(`data:image/png;base64,${base64}`);
    } catch {
      setErrorMessage(
        "Something went wrong, try again later or change your prompt"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "35%",
        position: "relative",
      }}
    >
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button
        className="pink-button"
        disabled={!prompt.trim()}
        style={{
          position: "absolute",
          bottom: "5%",
          right: "3%",
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          padding: 0,
        }}
        onClick={editImage}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="white"
            strokeWidth="5"
            fill="transparent"
          />

          <path
            d="M30 50 L45 65 L70 35"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
