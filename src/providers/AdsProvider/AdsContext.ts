import { createContext } from "react";
import type { Creative } from "../../types";

type AdsContextType = {
  selectedIds: number[];
  allQuickAds: Creative[];
  selectedQuickAds: Creative[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
  setAllQuickAds: React.Dispatch<React.SetStateAction<Creative[]>>;
};

export const AdsContext = createContext<AdsContextType>({
  selectedIds: [],
  setSelectedIds: () => {},
  allQuickAds: [],
  setAllQuickAds: () => {},
  selectedQuickAds: [],
});
