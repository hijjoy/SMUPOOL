import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
