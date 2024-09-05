"use client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface IDataProvider {
  activeBadge: number;
  setActiveBadge: (index: number) => void;
}

const HomePageData = createContext<IDataProvider | null>(null);

const useBadgesAndActivities = () => {
  const [activeBadge, setActiveBadge] = useState(4);

  return {
    activeBadge,
    setActiveBadge,
  };
};

export function ProvideBadgesAndActivities({
  children,
}: PropsWithChildren<any>) {
  const value = useBadgesAndActivities();
  return (
    <HomePageData.Provider value={value}> {children}</HomePageData.Provider>
  );
}

export const useHomePageData = () => {
  const context = useContext(HomePageData);
  if (context == null) {
    throw "Ensure that the component is wrapped inside the ProvideBadgesAndActivities component";
  }
  return context;
};
