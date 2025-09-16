import templates from "../data/templates.json";

type Props = {
  setPrompt: (p: string) => void;
};

export const Templates = ({ setPrompt }: Props) => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {templates.map((t) => (
        <button
          key={t}
          style={{
            borderRadius: "12px",
            padding: "4px",
            border: "1px solid gray",
            fontSize: "11px",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
          onClick={() => setPrompt(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
};
