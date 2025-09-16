import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Templates } from "./Templates";
import { TextArea } from "./Textarea";
import type { Creative } from "../types";
import { useAds } from "../providers/AdsProvider/useAds";
import { paths } from "../paths";

type Props = {
  editedBase64: string;
  errorMessage: string;
  selectedCreative: Creative;
  onEditCreative: (prompt: string) => void;
  setErrorMessage: (m: string) => void;
};

export const PromptEditor = ({
  editedBase64,
  errorMessage,
  selectedCreative,
  onEditCreative,
  setErrorMessage,
}: Props) => {
  const navigate = useNavigate();
  const { setAllQuickAds } = useAds();
  const [prompt, setPrompt] = useState("");

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

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    setErrorMessage("");
  };

  useEffect(() => setPrompt(""), [selectedCreative]);

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
          handleEditCreative={() => onEditCreative(prompt)}
          onChange={handlePromptChange}
        />
        {errorMessage && (
          <span style={{ fontSize: "16px", color: "red" }}>{errorMessage}</span>
        )}
      </div>
      <div style={{ display: "flex", gap: "16px", justifyContent: "end" }}>
        <button className="white-button" onClick={() => navigate(paths.HOME)}>
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
