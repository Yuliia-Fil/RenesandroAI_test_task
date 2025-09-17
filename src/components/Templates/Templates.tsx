import templates from "../../data/templates.json";
import styles from "./Templates.module.scss";

type Props = {
  onChange: (p: string) => void;
};

export const Templates = ({ onChange }: Props) => {
  return (
    <div className={styles.container}>
      {templates.map((t) => (
        <button key={t} className={styles.template} onClick={() => onChange(t)}>
          {t}
        </button>
      ))}
    </div>
  );
};
