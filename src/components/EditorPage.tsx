import { PromptEditor } from "./PromptEditor";
import { SideBar } from "./SideBar";

export const EditorPage = () => {
  return (
    <div style={{ height: "calc(100vh-80px)", marginBottom: "80px" }}>
      <h1>Edit your creatives</h1>
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "16px",
          height: "calc(100vh - 205px)",
          backgroundColor: "lightgray",
          borderRadius: "12px",
        }}
      >
        <SideBar />
        <div style={{ flex: 2 }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src="/assets/1.png"
          />
        </div>
        <PromptEditor />
      </div>
    </div>
  );
};
