import { Loader } from "./Loader";
import { getCreativeSrc } from "../utils/getCreativeSrc";
import type { Creative } from "../types";

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
  return (
    <div
      style={{
        flex: 2,
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        ref={imageRef}
        style={{
          width: "100%",
          aspectRatio: 1,
          objectFit: "contain",
        }}
        src={getCreativeSrc(selectedCreative)}
      />
      <Loader loading={loading} />
    </div>
  );
};
