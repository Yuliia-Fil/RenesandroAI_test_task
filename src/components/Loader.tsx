import { ClipLoader } from "react-spinners";

export const Loader = ({ loading }: { loading: boolean }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
    }}
  >
    <ClipLoader color="deeppink" loading={loading} size={60} />
  </div>
);
