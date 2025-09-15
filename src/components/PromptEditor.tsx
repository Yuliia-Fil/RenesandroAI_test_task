import { useNavigate } from "react-router-dom";
import { Templates } from "./Templates";

export const PromptEditor = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flex: 2.5,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          height: "100%",
        }}
      >
        <h2 style={{ margin: 0 }}>Change with prompt</h2>
        <Templates />
        <div
          style={{
            height: "35%",
            position: "relative",
          }}
        >
          <textarea
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "12px",
              resize: "none",
              overflowY: "auto",
              padding: "12px",
            }}
          />
          <button
            className="pink-button"
            style={{
              position: "absolute",
              bottom: "5%",
              right: "3%",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              padding: 0,
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="white"
                strokeWidth="5"
                fill="transparent"
              />

              <path
                d="M30 50 L45 65 L70 35"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div style={{ display: "flex", gap: "16px", justifyContent: "end" }}>
        <button className="white-button" onClick={() => navigate("/")}>
          Back to all
        </button>
        <button className="pink-button">Save changes</button>
      </div>
    </div>
  );
};
