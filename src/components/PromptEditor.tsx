import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Templates } from "./Templates";
import { TextArea } from "./Textarea";
import type { Creative } from "../types";
import { useAds } from "../providers/AdsProvider/useAds";
import { paths } from "../paths";

type Props = {
  errorMessage: string;
  selectedCreative: Creative;
  selectedQuickAds: Creative[];
  onEditCreative: (prompt: string) => void;
  setErrorMessage: (m: string) => void;
};

export const PromptEditor = ({
  errorMessage,
  selectedCreative,
  selectedQuickAds,
  onEditCreative,
  setErrorMessage,
}: Props) => {
  const navigate = useNavigate();
  const { allQuickAds, setAllQuickAds } = useAds();
  const [prompt, setPrompt] = useState("");

  const handleSave = () => {
    const newQuickAds = allQuickAds.map((qA) => {
      const editedEl = selectedQuickAds.find((el) => el.id === qA.id);
      return editedEl ? editedEl : qA;
    });
    setAllQuickAds(newQuickAds);
    alert("Changes saved!");
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
        <button onClick={handleSave} className="pink-button">
          Save changes
        </button>
      </div>
    </div>
  );
};
