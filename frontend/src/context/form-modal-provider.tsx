import { FormModalContext, FormModalContextType } from "./form-modal-context";
import React, { useState, ReactNode } from "react";

interface FormModalProviderProps {
  children: ReactNode;
}

export const FormModalProvider: React.FC<FormModalProviderProps> = ({
  children,
}) => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Abre modal para cadastro
  const handleRegistrationModal = () => {
    setIsFormOpen(!isFormOpen);
  };

  // Abre modal para editar
  const handleEditModal = () => {
    setIsFormOpen(!isFormOpen);
    setIsEditing(!isEditing);
  };

  // Fecha modal
  const handleCloseModal = () => {
    setIsFormOpen(!isFormOpen);
    setIsEditing(false);
  };

  const contextValue: FormModalContextType = {
    handleRegistrationModal,
    handleCloseModal,
    handleEditModal,
    setIsFormOpen,
    setIsEditing,
    isFormOpen,
    isEditing,
  };

  return (
    <FormModalContext.Provider value={contextValue}>
      {children}
    </FormModalContext.Provider>
  );
};
