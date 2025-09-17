import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.scss";

export const Loader = ({ loading }: { loading: boolean }) => (
  <div className={styles.container}>
    <ClipLoader color="deeppink" loading={loading} size={60} />
  </div>
);
