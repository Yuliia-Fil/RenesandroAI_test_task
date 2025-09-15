import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EditorPage } from "./components/EditorPage";
import { HomePage } from "./components/HomePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/editor" element={<EditorPage />} />
    </Routes>
  );
};
