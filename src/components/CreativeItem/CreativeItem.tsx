import { useState } from "react";
import type { Creative } from "../../types";
import { getCreativeSrc } from "../../utils/getCreativeSrc";
import styles from "./CreativeItem.module.scss";

type Props = {
  creative: Creative;
  ids: number[];
  setIds: React.Dispatch<React.SetStateAction<number[]>>;
};

export const CreativeItem = ({ creative, ids, setIds }: Props) => {
  const [loaded, setLoaded] = useState(false);
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
      className={styles.creativeContainer}
    >
      {!loaded && <div className="skeleton" />}
      <img
        src={getCreativeSrc(creative)}
        alt="image"
        className={`image ${loaded ? "visible" : "hidden"}`}
        onLoad={() => setLoaded(true)}
      />
      <input type="checkbox" checked={isCreativeSelected} readOnly></input>
    </div>
  );
};
