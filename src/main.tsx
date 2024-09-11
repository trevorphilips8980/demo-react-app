import { createRoot } from "react-dom/client";
import "../i18.ts";
import App from "./App.tsx";
import "./index.css";
import ClientProvider from "./provider/QueryClientProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <ClientProvider>
    <App />
  </ClientProvider>
);
