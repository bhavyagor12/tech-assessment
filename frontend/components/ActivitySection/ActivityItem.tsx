import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import cx from "classnames";
import Image from "next/image";
import transactionIcon from "../../public/transaction.svg";
import bridgeIcon from "../../public/bridged.svg";

interface ActivityItemProps {
  index: number;
  item: {
    activity: string;
    points: number | string;
    date: string;
    time: string;
    txid: string;
  };
}

const styles = {
  container: "text-text-secondary",
  header: "text-[16px] leading-4 font-medium mb-2",
  table: "w-full pt-[16px]",
  tableHeaderContainer:
    "w-full rounded-2xl bg-dark-ele2 border-primary border-2",
  tableRow: "w-full",
  tableColumnHeader:
    "min-w-[266px] rounded-2xl h-[44px] text-start text-text-secondary",
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

const ActivityItem: React.FC<ActivityItemProps> = ({ index, item }) => {
  const rowStyle = cx(
    styles.tableRowBorder,
    index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd,
  );
  return (
    <Table.Row key={index} className={rowStyle}>
      <Table.Cell className={styles.cell}>
        <div className={styles.cellFlexContainer}>
          {item.activity === "Transaction" ? (
            <Image src={transactionIcon} alt="tx" width={16} height={16} />
          ) : (
            <Image src={bridgeIcon} alt="bridge" width={16} height={16} />
          )}
          {item.activity}
        </div>
      </Table.Cell>
      <Table.Cell className={styles.cellHighlightedText}>
        <div className={styles.badge}>{item.points}</div>
      </Table.Cell>
      <Table.Cell className={styles.cellText}>
        {item.date}
        {item.time}
      </Table.Cell>
      <Table.Cell
        className={styles.cellText}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <p>{item.txid}</p>
        <button className={styles.copyButton} style={{ borderRadius: "24px" }}>
          <p className="text-center text-text-secondary text-xs font-medium leading-[16.8px]">
            Copy
          </p>
        </button>
      </Table.Cell>
      <Table.Cell className={styles.cell}>
        <ExternalLinkIcon className="text-text-secondary h-[16px] w-[16px]" />
      </Table.Cell>
    </Table.Row>
  );
};

export default ActivityItem;
