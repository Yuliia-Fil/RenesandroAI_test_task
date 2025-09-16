import { useNavigate } from "react-router-dom";
import type { Creative } from "../types";
import { paths } from "../paths";
import { getCreativeSrc } from "../utils/getCreativeSrc";

type Props = {
  ads: Creative[];
  selectedAd: Creative;
  setSelectedAd: (a: Creative) => void;
};

export const SideBar = ({ ads, selectedAd, setSelectedAd }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: "16px",
        borderRadius: "12px",
        overflowY: "auto",
        backgroundColor: "white",
        padding: "16px",
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: "100%",
          position: "sticky",
          top: "-16px",
        }}
        className="white-button"
        onClick={() => navigate(paths.HOME)}
      >
        Go back
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {ads.map((ad) => (
          <div
            key={ad.id}
            style={{
              width: "150px",
              height: "150px",
            }}
            onClick={() => setSelectedAd(ad)}
          >
            <img
              style={{
                width: "100%",
                objectFit: "contain",
                borderRadius: "12px",
                border: selectedAd.id === ad.id ? "2px solid deeppink" : "none",
              }}
              src={getCreativeSrc(ad)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
