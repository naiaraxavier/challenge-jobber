import { createContext, Dispatch, SetStateAction } from "react";

export interface FormModalContextType {
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  handleRegistrationModal: () => void;
  handleEditModal: () => void;
  handleCloseModal: () => void;
  isFormOpen: boolean;
  isEditing: boolean;
}

export const FormModalContext = createContext<FormModalContextType | undefined>(
  undefined
);
