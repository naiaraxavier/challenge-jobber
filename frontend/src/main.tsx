import { FormModalProvider } from "./context/form-modal-provider.tsx";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <FormModalProvider>
    <App />
  </FormModalProvider>
);
