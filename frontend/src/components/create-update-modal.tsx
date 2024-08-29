import { FormModalContext } from "../context/form-modal-context";
import React, { useState, useContext } from "react";
import { Tag, X, ImageUp, Text } from "lucide-react";
import { Button } from "../components/button";
import "../css/create-update-modal.css";

export const CreateUpdateModal: React.FC = () => {
  const [fileName, setFileName] = useState<string>("");

  const context = useContext(FormModalContext);
  if (!context) {
    throw new Error();
  }
  const { handleCloseModal, isEditing } = context;

  // Lida com a informação do arquivo de imagem
  const handleFileToggle = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.MouseEvent<SVGElement>): void => {
    if ("files" in target) {
      const file = target.files?.[0];
      setFileName(file ? file.name : "");
    } else {
      window.document.location.reload();
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{isEditing ? "Editar" : "Cadastrar"} trabalho</h2>
          <X className="close-button" onClick={handleCloseModal} />
        </div>
        <form>
          <div className="input-group">
            <Tag className="tag" />
            <input name="title" placeholder="Título" className="input--title" />
          </div>
          <div className="input-group">
            <Text className="tag" />
            <input
              name="description"
              placeholder="Descrição"
              className="input--description"
            />
          </div>
          <div className="input-group-img">
            <label htmlFor="imageUpload" className="upload-button button">
              <ImageUp />
              Escolha uma imagem
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleFileToggle}
            />
            {fileName && (
              <div className="file-info">
                <p className="file-name">{`Arquivo escolhido: ${fileName}`}</p>
                <X
                  className="remove-button"
                  onClick={handleFileToggle}
                  size={15}
                />
              </div>
            )}
          </div>
          <Button size="2">{isEditing ? "Editar" : "Salvar"}</Button>
        </form>
      </div>
    </div>
  );
};
