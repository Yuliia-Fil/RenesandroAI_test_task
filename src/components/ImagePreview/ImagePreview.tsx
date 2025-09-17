import { getCreativeSrc } from "../../utils/getCreativeSrc";
import type { Creative } from "../../types";
import styles from "./ImagePreview.module.scss";
import { useState } from "react";
import { Loader } from "../Loader";

type Props = {
  imageRef: React.RefObject<HTMLImageElement | null>;
  selectedCreative: Creative;
  loading: boolean;
};

export const ImagePreview = ({
  imageRef,
  selectedCreative,
  loading,
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={styles.container}>
      {!loaded && <div className="skeleton"></div>}
      <img
        ref={imageRef}
        alt="selected-image"
        className={`image ${loaded ? "visible" : "hidden"}`}
        onLoad={() => setLoaded(true)}
        src={getCreativeSrc(selectedCreative)}
      />
      <Loader loading={loading} />
    </div>
  );
};
