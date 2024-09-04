const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getDateMonthYear = (date: string) => {
  return (
    new Date(date).getDate() +
    "." +
    (new Date(date).getMonth() + 1) +
    "." +
    new Date(date).getFullYear()
  );
};

const getTimestamp = (date: string) => {
  return new Date(date).getHours() + ":" + new Date(date).getMinutes() + ":0" + new Date(date).getSeconds();
};

const getRandomBetweenTransactionAndBridged = (index: number) => {
  return index % 2 === 0 ? "Transaction" : "Bridged";
};

export const shortenTxid = (txid: string) => {
  txid = txid.replace(/^(.{5})(.*)(.{4})$/, "$1...$3");
  return txid;
};

export const makeTableData = (data: any) => {
  return Array.isArray(data?.logs)
    ? data.logs.map((transaction: any, index: number) => ({
      activity: getRandomBetweenTransactionAndBridged(index),
      point: "+" + String(getRandomNumber(200, 1000)), // Random points between 0 and 100
      date: getDateMonthYear(transaction.block_timestamp),
      time: getTimestamp(transaction.block_timestamp),
      txid: transaction.transaction_hash,
      extra: "https://randomLink.com",
    }))
    : [];
};
