import { useState } from "react";
import { IdsContext } from "../context/IdsContext";

export const IdsProvider = ({ children }: { children: React.ReactNode }) => {
  const [ids, setIds] = useState<number[]>([]);

  return (
    <IdsContext.Provider value={{ ids, setIds }}>
      {children}
    </IdsContext.Provider>
  );
};
