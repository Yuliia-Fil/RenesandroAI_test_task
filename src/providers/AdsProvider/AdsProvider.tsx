import { useMemo, useState } from "react";
import { AdsContext } from "./AdsContext";
import quickAds from "../../data/quickAd.json";

export const AdsProvider = ({ children }: { children: React.ReactNode }) => {
  const [ids, setIds] = useState<number[]>([]);
  const [allQuickAds, setAllQuickAds] = useState(quickAds);
  const selectedQuickAds = useMemo(
    () => allQuickAds.filter((qA) => ids.includes(qA.id)),
    [ids, allQuickAds]
  );

  return (
    <AdsContext.Provider
      value={{ ids, setIds, allQuickAds, setAllQuickAds, selectedQuickAds }}
    >
      {children}
    </AdsContext.Provider>
  );
};
