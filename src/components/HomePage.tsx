import { useNavigate } from "react-router-dom";
import { CreativeItem } from "./CreativeItem";
import { useIds } from "../hooks/useIds";
import { useMemo } from "react";

export const HomePage = () => {
  const navigate = useNavigate();
  const { ids, setIds, selectedQuickAds, quickAds } = useIds();
  const allIds = useMemo(() => quickAds.map((qA) => qA.id), [quickAds]);

  const handleSelectAll = () => {
    if (ids.length === quickAds.length) {
      setIds([]);
    } else {
      setIds(allIds);
    }
  };

  return (
    <div style={{ marginBottom: "80px" }}>
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
          {quickAds.map((creative) => (
            <CreativeItem
              ids={ids}
              setIds={setIds}
              key={creative.id}
              creative={creative}
            />
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
            <span
              style={{ fontSize: "11px" }}
            >{`${quickAds.length} results`}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                id="selectAll"
                onChange={handleSelectAll}
                checked={ids.length === quickAds.length}
              />
              <label style={{ fontSize: "14px" }} htmlFor="selectAll">
                Select All
              </label>
            </div>
            <span style={{ fontSize: "11px" }}>{`${ids.length} selected`}</span>
          </div>
          <button
            className="white-button"
            disabled={selectedQuickAds.length === 0}
            onClick={() => navigate("/editor")}
          >
            Edit with AI
          </button>
        </div>
      </div>
    </div>
  );
};
