import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EditorPage } from "./components/EditorPage";
import { HomePage } from "./components/HomePage";
import { IdsProvider } from "./components/IdsContextProvider";

export const App = () => {
  return (
    <IdsProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </IdsProvider>
  );
};
