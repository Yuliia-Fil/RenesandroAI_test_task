import type { Creative } from "../types";

export const CreativeItem = ({
  creative,
  ids,
  setIds,
}: {
  creative: Creative;
  ids: number[];
  setIds: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!ids.includes(creative.id)) setIds([...ids, creative.id]);
    } else {
      setIds(ids.filter((id) => id !== creative.id));
    }
  };
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
          cursor: "pointer",
        }}
        type="checkbox"
        checked={ids.includes(creative.id)}
        onChange={handleChange}
      ></input>
    </div>
  );
};
