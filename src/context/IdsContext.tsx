import { createContext } from "react";

type IdsContextType = {
  ids: number[];
  setIds: React.Dispatch<React.SetStateAction<number[]>>;
};

export const IdsContext = createContext<IdsContextType>({
  ids: [],
  setIds: () => {},
});
