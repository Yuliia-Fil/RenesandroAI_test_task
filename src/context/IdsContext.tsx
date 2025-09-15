import { createContext } from "react";
import type { Creative } from "../types";

type IdsContextType = {
  ids: number[];
  setIds: React.Dispatch<React.SetStateAction<number[]>>;
  quickAds: Creative[];
  selectedQuickAds: Creative[];
};

export const IdsContext = createContext<IdsContextType>({
  ids: [],
  setIds: () => {},
  quickAds: [],
  selectedQuickAds: [],
});
