import ReactDOM from "react-dom/client";
import { theme } from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Layout";
import { HomePage } from "./pages";
import { QueryClientProvider } from "@tanstack/react-query";
import { querieClient } from "./services";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={querieClient}>
      <Layout>
        <HomePage />
      </Layout>
    </QueryClientProvider>
  </ChakraProvider>
);
