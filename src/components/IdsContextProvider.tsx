import { useMemo, useState } from "react";
import { IdsContext } from "../context/IdsContext";
import quickAds from "../data/quickAd.json";

export const IdsProvider = ({ children }: { children: React.ReactNode }) => {
  const [ids, setIds] = useState<number[]>([]);
  const selectedQuickAds = useMemo(
    () => quickAds.filter((qA) => ids.includes(qA.id)),
    [ids]
  );

  return (
    <IdsContext.Provider value={{ ids, setIds, quickAds, selectedQuickAds }}>
      {children}
    </IdsContext.Provider>
  );
};
