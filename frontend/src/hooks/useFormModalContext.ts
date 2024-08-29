import { FormModalContext } from "../context/form-modal-context";
import { useContext } from "react";

export const useFormModalContext = () => {
  const context = useContext(FormModalContext);
  if (!context) {
    throw new Error(
      "useFormModalContext must be used within a FormModalProvider"
    );
  }
  return context;
};
