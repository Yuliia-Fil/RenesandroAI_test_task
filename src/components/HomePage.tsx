import { useNavigate } from "react-router-dom";
import quickAd from "../data/quickAd.json";
import { CreativeItem } from "./CreativeItem";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Chose your creatives</h1>
      <div
        style={{
          display: "flex",
          gap: "16px",
          backgroundColor: "lightgray",
          padding: "16px",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 4,
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {quickAd.map((creative) => (
            <CreativeItem creative={creative} />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            borderRadius: "12px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "14px" }}>quick_ad</span>
            <span style={{ fontSize: "11px" }}>xxx results</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="selectAll" />
              <label style={{ fontSize: "14px" }} htmlFor="selectAll">
                Select All
              </label>
            </div>
            <span style={{ fontSize: "11px" }}>xxx selected</span>
          </div>
          <button
            style={{
              backgroundColor: "white",
              color: "deeppink",
              border: "1px solid deeppink",
            }}
            onClick={() => navigate("/editor")}
          >
            Edit with AI
          </button>
        </div>
      </div>
    </div>
  );
};
