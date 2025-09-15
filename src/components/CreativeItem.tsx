import type { Creative } from "../types";

export const CreativeItem = ({ creative }: { creative: Creative }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        position: "relative",
        borderRadius: "12px",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "12px",
        }}
        src={creative.img}
      />
      <input
        style={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: "10%",
          height: "15%",
        }}
        type="checkbox"
      ></input>
    </div>
  );
};
