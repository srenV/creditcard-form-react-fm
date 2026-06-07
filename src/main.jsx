import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { CreditCardProvider } from "./features/credit-card/context/CreditCardProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreditCardProvider>
      <App />
    </CreditCardProvider>
  </StrictMode>,
);
