"use client"
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:8080/v1/graphql",
    headers: {
      "x-hasura-admin-secret": "lgKHiV2PGXB2N/g1nOKqp6yAbbFcI5RlVZ+L467kjQM=",
    },
  }),
});

const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
