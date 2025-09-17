import { useNavigate } from "react-router-dom";
import type { Creative } from "../../types";
import { paths } from "../../paths";
import { getCreativeSrc } from "../../utils/getCreativeSrc";
import styles from "./SideBar.module.scss";
import { useState } from "react";

type Props = {
  ads: Creative[];
  selectedAd: Creative;
  setSelectedAd: (a: Creative) => void;
};

export const SideBar = ({ ads, selectedAd, setSelectedAd }: Props) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={styles.container}>
      <button className="white-button" onClick={() => navigate(paths.HOME)}>
        Go back
      </button>
      <div className={styles.imagesContainer}>
        {ads.map((ad) => (
          <div
            key={ad.id}
            className={styles.imagesContainer_item}
            onClick={() => setSelectedAd(ad)}
          >
            {!loaded && <div className="skeleton" />}
            <img
              style={{
                border: selectedAd.id === ad.id ? "2px solid deeppink" : "none",
              }}
              alt="image"
              className={`image ${loaded ? "visible" : "hidden"}`}
              onLoad={() => setLoaded(true)}
              src={getCreativeSrc(ad)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
