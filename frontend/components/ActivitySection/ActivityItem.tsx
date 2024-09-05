import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Table, Text } from "@radix-ui/themes";
import cx from "classnames";
import Image from "next/image";
import transactionIcon from "../../public/transaction.svg";
import bridgeIcon from "../../public/bridged.svg";
import { shortenTxid } from "@/utils";
import Link from "next/link";
import SuccessBadge from "../SuccessBadge";

interface ActivityItemProps {
  index: number;
  item: {
    activity: string;
    point: string;
    date: string;
    time: string;
    txid: string;
    link: string;
  };
}

const styles = {
  container: "text-text-secondary",
  table: "w-full pt-[16px]",
  tableRow: "w-full",
  tableRowBorder: "border-b border-gray-700",
  tableRowEven: "text-text-primary border-t border-gray-700 bg-dark-ele2",
  tableRowOdd: "text-text-primary border-t border-gray-700 bg-dark-ele3",
  cell: "py-2 text-text-primary",
  cellHighlightedText: "py-2 text-green-500",
  cellText: "py-2 text-text-secondary text-[14px]",
  cellFlexContainer: "flex items-center leading-4 gap-1",
  copyButton:
    "w-[47px] h-[24px] px-2 py-1 bg-[#16181A] rounded-full flex items-center justify-center gap-2",
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
        <SuccessBadge text={item.point} />
      </Table.Cell>
      <Table.Cell className={styles.cellText}>
        {item.date}
        <Text className="mx-[5px] inline-flex h-[24px] w-[65px] items-center justify-center rounded-[32px] bg-dark-ele3 text-[12px]">
          {item.time}
        </Text>
      </Table.Cell>
      <Table.Cell
        className={styles.cellText}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Text>{shortenTxid(item.txid)}</Text>
        <button
          className={styles.copyButton}
          style={{ borderRadius: "24px" }}
          onClick={() => {
            navigator.clipboard.writeText(item.txid);
            alert("Copied to clipboard");
          }}
        >
          <Text className="text-center text-text-secondary text-xs font-medium leading-[16.8px]">
            Copy
          </Text>
        </button>
      </Table.Cell>
      <Table.Cell className={styles.cell}>
        <Link href={item.link}>
          <ExternalLinkIcon className="text-text-secondary h-[16px] w-[16px]" />
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};

export default ActivityItem;
