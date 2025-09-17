import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { AdsProvider } from "./providers/AdsProvider/AdsProvider";
import { paths } from "./paths";
import { EditorPage } from "./components/EditorPage";

export const App = () => {
  return (
    <AdsProvider>
      <Routes>
        <Route path={paths.HOME} element={<HomePage />} />
        <Route path={paths.EDITOR} element={<EditorPage />} />
      </Routes>
    </AdsProvider>
  );
};
