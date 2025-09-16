type Props = {
  prompt: string;
  handleEditCreative: () => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea = ({ prompt, handleEditCreative, onChange }: Props) => {
  return (
    <div
      style={{
        height: "35%",
        position: "relative",
      }}
    >
      <textarea value={prompt} onChange={onChange} />
      <button
        className="pink-button"
        disabled={!prompt.trim()}
        style={{
          position: "absolute",
          bottom: "5%",
          right: "3%",
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          padding: 0,
        }}
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
