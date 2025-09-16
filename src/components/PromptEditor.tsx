import { useNavigate } from "react-router-dom";
import { Templates } from "./Templates";
import { TextArea } from "./Textarea";
import { useState, type RefObject } from "react";

type Props = {
  imageRef: RefObject<HTMLImageElement | null>;
  editedBase64: string;
  setEditedBase64: (b: string) => void;
  loading: boolean;
  setLoading: (l: boolean) => void;
  errorMessage: string;
  setErrorMessage: (m: string) => void;
};

export const PromptEditor = ({
  imageRef,
  editedBase64,
  setEditedBase64,
  loading,
  setLoading,
  errorMessage,
  setErrorMessage,
}: Props) => {
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
        <button disabled={!editedBase64} className="pink-button">
          Save changes
        </button>
      </div>
    </div>
  );
};
