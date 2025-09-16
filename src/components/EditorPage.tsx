import { useEffect, useRef, useState } from "react";
import { useAds } from "../hooks/useAds";
import { PromptEditor } from "./PromptEditor";
import { SideBar } from "./SideBar";
import { Loader } from "./Loader";
import { useNavigate } from "react-router-dom";

export const EditorPage = () => {
  const { selectedQuickAds } = useAds();
  const [selectedCreative, setSelectedCreative] = useState(selectedQuickAds[0]);
  const [editedBase64, setEditedBase64] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setEditedBase64("");
    setErrorMessage("");
  }, [selectedCreative]);

  if (selectedQuickAds.length === 0) {
    return (
      <div>
        <h1>Edit your creatives</h1>
        <h3>
          No creatives selected, return to Home Page and select some creative
        </h3>
        <button className="white-button" onClick={() => navigate("/")}>
          Back to all
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "calc(100vh-80px)",
        marginBottom: "80px",
        pointerEvents: loading ? "none" : "unset",
      }}
    >
      <h1>Edit your creatives</h1>
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "16px",
          height: "calc(100vh - 205px)",
          backgroundColor: "lightgray",
          borderRadius: "12px",
        }}
      >
        <SideBar
          ads={selectedQuickAds}
          selectedAd={selectedCreative}
          setSelectedAd={setSelectedCreative}
        />
        <div
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            ref={imageRef}
            style={{
              width: "100%",
              aspectRatio: 1,
              objectFit: "contain",
            }}
            src={selectedCreative.img}
          />
          <Loader loading={loading} />
          {editedBase64 && !errorMessage && (
            <img
              style={{
                width: "100%",
                aspectRatio: 1,
                objectFit: "cover",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              src={editedBase64}
              onError={() =>
                setErrorMessage(
                  "Something went wrong, try again later or change your prompt"
                )
              }
            />
          )}
        </div>
        <PromptEditor
          imageRef={imageRef}
          editedBase64={editedBase64}
          setEditedBase64={setEditedBase64}
          loading={loading}
          setLoading={setLoading}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          selectedCreative={selectedCreative}
        />
      </div>
    </div>
  );
};
