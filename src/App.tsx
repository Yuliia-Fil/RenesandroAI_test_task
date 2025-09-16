import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EditorPage } from "./components/EditorPage";
import { HomePage } from "./components/HomePage";
import { AdsProvider } from "./components/AdsContextProvider";

export const App = () => {
  return (
    <AdsProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </AdsProvider>
  );
};
