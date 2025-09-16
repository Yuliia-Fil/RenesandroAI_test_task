import { useNavigate } from "react-router-dom";
import { Templates } from "./Templates";
import { TextArea } from "./Textarea";
import { useEffect, useState, type RefObject } from "react";
import type { Creative } from "../types";
import { useAds } from "../hooks/useAds";

type Props = {
  imageRef: RefObject<HTMLImageElement | null>;
  editedBase64: string;
  setEditedBase64: (b: string) => void;
  loading: boolean;
  setLoading: (l: boolean) => void;
  errorMessage: string;
  setErrorMessage: (m: string) => void;
  selectedCreative: Creative;
};

export const PromptEditor = ({
  imageRef,
  editedBase64,
  setEditedBase64,
  loading,
  setLoading,
  errorMessage,
  setErrorMessage,
  selectedCreative,
}: Props) => {
  const navigate = useNavigate();
  const { setAllQuickAds } = useAds();
  const [prompt, setPrompt] = useState("");

  useEffect(() => setErrorMessage(""), [prompt, setErrorMessage]);
  useEffect(() => setPrompt(""), [selectedCreative]);

  const handleSave = () => {
    const currentId = selectedCreative.id;
    setAllQuickAds((prev) => {
      return prev.map((el) => {
        if (el.id === currentId) {
          return { ...el, img: editedBase64 };
        }
        return el;
      });
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 2.5,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          height: "100%",
        }}
      >
        <h2 style={{ margin: 0 }}>Change with prompt</h2>
        <Templates setPrompt={setPrompt} />
        <TextArea
          prompt={prompt}
          setPrompt={setPrompt}
          imageRef={imageRef}
          setEditedBase64={setEditedBase64}
          setLoading={setLoading}
          setErrorMessage={setErrorMessage}
        />
        {errorMessage && !loading && (
          <span style={{ fontSize: "16px", color: "red" }}>{errorMessage}</span>
        )}
      </div>
      <div style={{ display: "flex", gap: "16px", justifyContent: "end" }}>
        <button className="white-button" onClick={() => navigate("/")}>
          Back to all
        </button>
        <button
          disabled={!editedBase64}
          onClick={handleSave}
          className="pink-button"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};
