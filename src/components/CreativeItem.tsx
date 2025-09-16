import type { Creative } from "../types";

type Props = {
  creative: Creative;
  ids: number[];
  setIds: React.Dispatch<React.SetStateAction<number[]>>;
};

export const CreativeItem = ({ creative, ids, setIds }: Props) => {
  const isCreativeSelected = ids.includes(creative.id);

  const toggleIsCreativeSelected = () => {
    setIds(
      isCreativeSelected
        ? ids.filter((id) => id !== creative.id)
        : (prev) => [...prev, creative.id]
    );
  };
  return (
    <div
      onClick={toggleIsCreativeSelected}
      style={{
        width: "200px",
        height: "200px",
        position: "relative",
        borderRadius: "12px",
        cursor: "pointer",
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
          cursor: "pointer",
        }}
        type="checkbox"
        checked={isCreativeSelected}
        readOnly
      ></input>
    </div>
  );
};
