import { gql } from "@apollo/client";

export const GET_LOGS = gql`
  subscription GetLogs {
    logs(order_by: { block_timestamp: desc }, limit: 6) {
      transaction_hash
      block_timestamp
    }
  }
`;
