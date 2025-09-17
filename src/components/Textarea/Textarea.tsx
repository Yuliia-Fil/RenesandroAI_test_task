import styles from "./Textarea.module.scss";

type Props = {
  prompt: string;
  handleEditCreative: () => void;
  onChange: (value: string) => void;
};

export const TextArea = ({ prompt, handleEditCreative, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={prompt}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className={`pink-button ${styles.editButton}`}
        disabled={!prompt.trim()}
        onClick={handleEditCreative}
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
  );
};
