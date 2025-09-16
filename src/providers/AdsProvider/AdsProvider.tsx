import { useMemo, useState } from "react";
import { AdsContext } from "./AdsContext";
import quickAds from "../../data/quickAd.json";

export const AdsProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [allQuickAds, setAllQuickAds] = useState(quickAds);
  const selectedQuickAds = useMemo(
    () => allQuickAds.filter((qA) => selectedIds.includes(qA.id)),
    [selectedIds, allQuickAds]
  );

  return (
    <AdsContext.Provider
      value={{
        selectedIds,
        allQuickAds,
        selectedQuickAds,
        setSelectedIds,
        setAllQuickAds,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
