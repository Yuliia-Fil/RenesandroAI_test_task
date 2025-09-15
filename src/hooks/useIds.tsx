import { useContext } from "react";
import { IdsContext } from "../context/IdsContext";

export const useIds = () => useContext(IdsContext);
