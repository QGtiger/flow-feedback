import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { CommonErrorBoundaryPanel } from "./components/CommonErrorBoundaryPanel/index.tsx";
import "./common/index.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ErrorBoundary FallbackComponent={CommonErrorBoundaryPanel}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ErrorBoundary>
  // </StrictMode>
);
