import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/homePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/editor" />
    </Routes>
  );
};
