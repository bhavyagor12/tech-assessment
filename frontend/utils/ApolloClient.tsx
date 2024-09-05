"use client";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
  split,
} from "@apollo/client";
import { PropsWithChildren } from "react";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const ADMIN_SECRET = "lgKHiV2PGXB2N/g1nOKqp6yAbbFcI5RlVZ+L467kjQM=";
const HASURA_URL = "http://localhost:8080/v1/graphql";
const HASURA_WS_URL = "ws://localhost:8080/v1/graphql";

const httpLink = new HttpLink({
  uri: HASURA_URL,
  headers: {
    "x-hasura-admin-secret": ADMIN_SECRET,
  },
});

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
      createClient({
        url: HASURA_WS_URL,
        connectionParams: {
          headers: {
            "x-hasura-admin-secret": ADMIN_SECRET,
          },
        },
      }),
    )
    : null;

const splitLink =
  typeof window !== "undefined" && wsLink !== null
    ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink,
    )
    : httpLink;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
