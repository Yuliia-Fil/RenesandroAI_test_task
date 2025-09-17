import { useRef, useState } from "react";
import { useAds } from "../../providers/AdsProvider/useAds";
import { useNavigate } from "react-router-dom";
import { getBase64 } from "../../api/getBase64";
import { getImg } from "../../api/geminiAPI";
import { paths } from "../../paths";
import type { Creative } from "../../types";
import styles from "./EditorPage.module.scss";
import { ImagePreview } from "../ImagePreview";
import { SideBar } from "../SideBar";
import { PromptEditor } from "../PromptEditor";

export const EditorPage = () => {
  const { allQuickAds, selectedIds } = useAds();

  const [selectedQuickAds, setSelectedQuickAds] = useState<Creative[]>(() =>
    allQuickAds.filter((qA) => selectedIds.includes(qA.id))
  );
  const [selectedCreative, setSelectedCreative] = useState(selectedQuickAds[0]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const navigate = useNavigate();

  const onEditCreative = async (prompt: string) => {
    if (!imageRef.current) return;

    try {
      setLoading(true);
      const startBase64 = selectedCreative.editedBase64
        ? selectedCreative.editedBase64
        : getBase64(imageRef.current);
      const editedBase64 = await getImg(startBase64, prompt);

      if (editedBase64.length <= 100) {
        // Model can return invalid base64 if prompt is invalid.
        setErrorMessage("Model can't handle your promt, try to change it.");
        return;
      }

      setSelectedCreative((prevCreative) => ({
        ...prevCreative,
        editedBase64,
      }));
      setSelectedQuickAds((prev) =>
        prev.map((creative) => {
          if (creative.id !== selectedCreative.id) return creative;

          return {
            ...creative,
            editedBase64,
          };
        })
      );
    } catch {
      setErrorMessage(
        "Something went wrong, try again later, probably model overloaded."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChangeSelectedCreative = (creative: Creative) => {
    setSelectedCreative(creative);
    setErrorMessage("");
  };

  if (selectedQuickAds.length === 0) {
    return (
      <div>
        <h1>Edit your creatives</h1>
        <h3>
          No creatives selected, return to Home Page and select some creative
        </h3>
        <button className="white-button" onClick={() => navigate(paths.HOME)}>
          Back to all
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        pointerEvents: loading ? "none" : "unset",
      }}
    >
      <h1>Edit your creatives</h1>
      <h6>
        <em>
          For image generation I replaced model gemini-2.5-flash-image-preview
          with model gemini-2.0-flash-preview-image-generation because model 2.5
          doesn’t have sufficient free quotas for generation. I decided to focus
          on demonstrating the functionality of the test task, so some of the
          generated images may be of lower quality.
        </em>
      </h6>
      <div className={styles.content}>
        <SideBar
          ads={selectedQuickAds}
          selectedAd={selectedCreative}
          setSelectedAd={handleChangeSelectedCreative}
        />
        <ImagePreview
          imageRef={imageRef}
          selectedCreative={selectedCreative}
          loading={loading}
        />
        <PromptEditor
          errorMessage={errorMessage}
          selectedCreative={selectedCreative}
          selectedQuickAds={selectedQuickAds}
          setErrorMessage={setErrorMessage}
          onEditCreative={onEditCreative}
        />
      </div>
    </div>
  );
};
