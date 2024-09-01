import { createContext, Dispatch, SetStateAction } from "react";

export interface FormModalContextType {
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  handleRegistrationModal: () => void;
  handleCloseModal: () => void;
  handleEditModal: () => void;
  isFormOpen: boolean;
  isEditing: boolean;
}

export const FormModalContext = createContext<FormModalContextType | undefined>(
  undefined
);
