import { FormModalContext, FormModalContextType } from "./form-modal-context";
import React, { useState, ReactNode } from "react";

interface FormModalProviderProps {
  children: ReactNode;
}

export const FormModalProvider: React.FC<FormModalProviderProps> = ({
  children,
}) => {
  // Modal de formulário criar/editar
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  // Saber quando o form vai abrir no modo editar
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

  // Fecha modal de form
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
