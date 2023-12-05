import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PERSONAL_API, URI_API } from "../constant/api";

export const client = new ApolloClient({
  uri: URI_API,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${PERSONAL_API}`,
  },
});
