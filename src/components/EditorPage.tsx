import { useEffect, useRef, useState } from "react";
import { useIds } from "../hooks/useIds";
import { PromptEditor } from "./PromptEditor";
import { SideBar } from "./SideBar";
import { Loader } from "./Loader";

export const EditorPage = () => {
  const { selectedQuickAds } = useIds();
  const [selectedCreative, setSelectedCreative] = useState(selectedQuickAds[0]);
  const [editedBase64, setEditedBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setEditedBase64("");
  }, [selectedCreative]);

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
          {editedBase64 && (
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
            />
          )}
        </div>
        <PromptEditor
          imageRef={imageRef}
          editedBase64={editedBase64}
          setEditedBase64={setEditedBase64}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};
