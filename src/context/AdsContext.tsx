import { createContext } from "react";
import type { Creative } from "../types";

type AdsContextType = {
  ids: number[];
  setIds: React.Dispatch<React.SetStateAction<number[]>>;
  allQuickAds: Creative[];
  setAllQuickAds: React.Dispatch<React.SetStateAction<Creative[]>>;
  selectedQuickAds: Creative[];
};

export const AdsContext = createContext<AdsContextType>({
  ids: [],
  setIds: () => {},
  allQuickAds: [],
  setAllQuickAds: () => {},
  selectedQuickAds: [],
});
