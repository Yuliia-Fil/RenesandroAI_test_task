import { useContext } from "react";
import { AdsContext } from "./AdsContext";

export const useAds = () => useContext(AdsContext);
