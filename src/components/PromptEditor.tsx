import { useNavigate } from "react-router-dom";
import { Templates } from "./Templates";
import { TextArea } from "./Textarea";
import { useState, type RefObject } from "react";

export const PromptEditor = ({
  imageRef,
}: {
  imageRef: RefObject<HTMLImageElement | null>;
}) => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");

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
        <TextArea prompt={prompt} setPrompt={setPrompt} imageRef={imageRef} />
      </div>
      <div style={{ display: "flex", gap: "16px", justifyContent: "end" }}>
        <button className="white-button" onClick={() => navigate("/")}>
          Back to all
        </button>
        <button className="pink-button">Save changes</button>
      </div>
    </div>
  );
};
