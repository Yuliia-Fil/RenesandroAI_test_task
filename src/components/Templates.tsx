import templates from "../data/templates.json";

export const Templates = () => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {templates.map((t) => (
        <button
          style={{
            borderRadius: "12px",
            padding: "4px",
            border: "1px solid gray",
            fontSize: "11px",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
};
