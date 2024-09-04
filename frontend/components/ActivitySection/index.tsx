import { ACTIVITIES, ACTIVITY_HEADERS } from "@/constants";
import { Table } from "@radix-ui/themes";
import ActivityItem from "./ActivityItem";

const styles = {
  container: "text-text-secondary w-full",
  header: "text-[16px] leading-4 font-medium mb-2",
  table: "w-full pt-[16px]",
  tableHeaderContainer:
    "w-full rounded-2xl bg-dark-ele2 border-primary border-2",
  tableRow: "w-full",
  tableColumnHeader:
    "min-w-[266px] rounded-2xl h-[44px] text-start text-text-secondary text-[12px]",
  tableHeaderRow: "w-full bg-dark-ele3 text-text-secondary",
  tableBody: "",
  tableRowBorder: "border-b border-gray-700",
  tableRowEven: "text-text-primary border-t border-gray-700 bg-dark-ele2",
  tableRowOdd: "text-text-primary border-t border-gray-700 bg-dark-ele3",
  cell: "py-2 text-text-primary",
  cellHighlightedText: "py-2 text-green-500",
  cellText: "py-2 text-text-secondary",
  cellFlexContainer: "flex items-center leading-4 gap-1",
  copyButton:
    "w-[47px] h-[24px] px-2 py-1 bg-[#16181A] rounded-full flex items-center justify-center gap-2",
  badge:
    "inline-flex h-[24px] items-center rounded-[24px] bg-states-success-ele1 px-2 text-[12px] text-states-success",
};

const LastActivities: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Last Activities</h2>
      <Table.Root className={styles.table}>
        <Table.Header>
          <Table.Row className={styles.tableHeaderRow}>
            {ACTIVITY_HEADERS.map((header, index) => (
              <Table.ColumnHeaderCell
                key={index}
                className={styles.tableColumnHeader}
              >
                {header}
              </Table.ColumnHeaderCell>
            ))}
            <Table.ColumnHeaderCell>{""}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className={styles.tableBody}>
          {ACTIVITIES.map((activity, index) => (
            <ActivityItem key={index} index={index} item={activity} />
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default LastActivities;
