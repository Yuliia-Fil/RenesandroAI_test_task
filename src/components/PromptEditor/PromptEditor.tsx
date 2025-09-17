import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Templates } from "../Templates";
import { TextArea } from "../Textarea/Textarea";
import type { Creative } from "../../types";
import { useAds } from "../../providers/AdsProvider/useAds";
import { paths } from "../../paths";
import styles from "./PromptEditor.module.scss";

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
    const confirmChanges = confirm(
      "Do you really want to apply changes to all selected ads?"
    );

    if (!confirmChanges) return;

    const newQuickAds = allQuickAds.map((qA) => {
      const editedEl = selectedQuickAds.find((el) => el.id === qA.id);
      return editedEl ? editedEl : qA;
    });
    setAllQuickAds(newQuickAds);
    alert("Changes saved!");
  };

  const handlePromptChange = (value: string) => {
    setPrompt(value);
    setErrorMessage("");
  };

  useEffect(() => setPrompt(""), [selectedCreative]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Change with prompt</h2>
        <Templates onChange={handlePromptChange} />
        <TextArea
          prompt={prompt}
          handleEditCreative={() => onEditCreative(prompt)}
          onChange={handlePromptChange}
        />
        {errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </div>
      <div className={styles.buttons}>
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
