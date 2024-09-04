"use client";
import { makeTableData } from "@/utils";
import { gql, useQuery } from "@apollo/client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

interface IDataProvider {
  activeBadge: number;
  setActiveBadge: (index: number) => void;
  loading: boolean;
  error: any;
  data: any;
  tableData: {
    activity: string;
    point: string;
    date: string;
    time: string;
    txid: string;
    link: string;
  }[];
}

export const GET_TRANSACTIONS = gql`
  query MyQuery {
    logs(limit: 6, order_by: { block_timestamp: asc }) {
      transaction_hash
      block_timestamp
    }
  }
`;

const HomePageData = createContext<IDataProvider | null>(null);

const useBadgesAndActivities = () => {
  const [activeBadge, setActiveBadge] = useState(4);
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);
  const tableData = useMemo(() => makeTableData(data), [data]);

  return {
    activeBadge,
    setActiveBadge,
    loading,
    error,
    data,
    tableData,
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
