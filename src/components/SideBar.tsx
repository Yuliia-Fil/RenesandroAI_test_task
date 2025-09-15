import { useNavigate } from "react-router-dom";
import creatives from "../data/quickAd.json";

export const SideBar = () => {
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
      }}
    >
      <button
        style={{
          backgroundColor: "white",
          color: "deeppink",
          border: "1px solid deeppink",
          position: "sticky",
          top: "-16px",
        }}
        onClick={() => navigate("/")}
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
        {creatives.map((c) => (
          <div
            style={{
              width: "150px",
              height: "150px",
            }}
          >
            <img
              style={{
                width: "100%",
                objectFit: "contain",
                borderRadius: "12px",
              }}
              src={c.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
