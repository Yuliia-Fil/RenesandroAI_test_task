import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CreativeItem } from "./CreativeItem";
import { useAds } from "../providers/AdsProvider/useAds";
import { paths } from "../paths";

export const HomePage = () => {
  const navigate = useNavigate();
  const { selectedIds, setSelectedIds, selectedQuickAds, allQuickAds } =
    useAds();
  const allIds = useMemo(() => allQuickAds.map((qA) => qA.id), [allQuickAds]);

  const handleSelectAll = () => {
    setSelectedIds(selectedIds.length === allQuickAds.length ? [] : allIds);
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
          {allQuickAds.map((creative) => (
            <CreativeItem
              key={creative.id}
              ids={selectedIds}
              setIds={setSelectedIds}
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
            >{`${allQuickAds.length} results`}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                id="selectAll"
                onChange={handleSelectAll}
                checked={selectedIds.length === allQuickAds.length}
              />
              <label style={{ fontSize: "14px" }} htmlFor="selectAll">
                Select All
              </label>
            </div>
            <span
              style={{ fontSize: "11px" }}
            >{`${selectedIds.length} selected`}</span>
          </div>
          <button
            className="white-button"
            disabled={selectedQuickAds.length === 0}
            onClick={() => navigate(paths.EDITOR)}
          >
            Edit with AI
          </button>
        </div>
      </div>
    </div>
  );
};
