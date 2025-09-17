import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAds } from "../../providers/AdsProvider/useAds";
import { paths } from "../../paths";
import styles from "./HomePage.module.scss";
import { CreativeItem } from "../CreativeItem";

export const HomePage = () => {
  const navigate = useNavigate();
  const { selectedIds, setSelectedIds, allQuickAds } = useAds();
  const allIds = useMemo(() => allQuickAds.map((qA) => qA.id), [allQuickAds]);

  const handleSelectAll = () => {
    setSelectedIds(selectedIds.length === allQuickAds.length ? [] : allIds);
  };

  return (
    <div className={styles.homePage}>
      <h1>Chose your creatives</h1>
      <div className={styles.content}>
        <div className={styles.adsContainer}>
          {allQuickAds.map((creative) => (
            <CreativeItem
              key={creative.id}
              ids={selectedIds}
              setIds={setSelectedIds}
              creative={creative}
            />
          ))}
        </div>
        <div className={styles.controlsContainer}>
          <div className={styles.results}>
            <span className={styles.controlName}>quick_ad</span>
            <span
              className={styles.controlValue}
            >{`${allQuickAds.length} results`}</span>
          </div>
          <div className={styles.selected}>
            <div className={styles.selectedItem}>
              <input
                type="checkbox"
                id="selectAll"
                className={styles.checkbox}
                onClick={handleSelectAll}
                checked={selectedIds.length === allQuickAds.length}
              />
              <label className={styles.controlName} htmlFor="selectAll">
                Select All
              </label>
            </div>
            <span
              className={styles.controlValue}
            >{`${selectedIds.length} selected`}</span>
          </div>
          <button
            className="white-button"
            disabled={selectedIds.length === 0}
            onClick={() => navigate(paths.EDITOR)}
          >
            Edit with AI
          </button>
        </div>
      </div>
    </div>
  );
};
