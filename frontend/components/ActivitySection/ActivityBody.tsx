import { makeTableData } from "@/utils";
import { GET_LOGS } from "@/utils/apollo";
import { useSubscription } from "@apollo/client";
import { Spinner, Table } from "@radix-ui/themes";
import { useEffect, useMemo } from "react";
import ActivityItem from "./ActivityItem";

const ActivityBody: React.FC = () => {
  const { loading, error, data, restart } = useSubscription(GET_LOGS);
  const tableData = useMemo(() => makeTableData(data), [data]);

  if (error) {
    throw new Error("Error fetching data");
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Restarting subscription");
      restart();
    }, 10000);
    return () => clearTimeout(timeout);
  }, [restart]);
  if(loading) return <Spinner />;
  return (
    <Table.Body>
      {tableData.map((activity: any, index: number) => (
        <ActivityItem key={index} index={index} item={activity} />
      ))}
    </Table.Body>
  );
};

export default ActivityBody;
