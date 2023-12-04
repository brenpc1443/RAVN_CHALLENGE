import { ApolloProvider } from "@apollo/client";
import AppRouter from "shared/routes/AppRouter";
import { client } from "shared/utils/api/apolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
