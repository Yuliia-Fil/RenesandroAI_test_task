import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/homePage";
import { EditorPage } from "./components/EditorPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/editor" element={<EditorPage />} />
    </Routes>
  );
};
