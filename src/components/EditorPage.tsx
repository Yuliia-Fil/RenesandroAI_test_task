import { useRef, useState } from "react";
import { useIds } from "../hooks/useIds";
import { PromptEditor } from "./PromptEditor";
import { SideBar } from "./SideBar";

export const EditorPage = () => {
  const { selectedQuickAds } = useIds();
  const [selectedCreative, setSelectedCreative] = useState(selectedQuickAds[0]);
  const imageRef = useRef<HTMLImageElement | null>(null);

  return (
    <div style={{ height: "calc(100vh-80px)", marginBottom: "80px" }}>
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
        <div style={{ flex: 2 }}>
          <img
            ref={imageRef}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={selectedCreative.img}
          />
        </div>
        <PromptEditor imageRef={imageRef} />
      </div>
    </div>
  );
};
