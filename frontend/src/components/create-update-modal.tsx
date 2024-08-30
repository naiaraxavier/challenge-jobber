import { CreateUpdateModalProps } from "../interfaces/interfaces";
import { useFormModalContext } from "../hooks/useFormModalContext";
import { Tag, X, ImageUp, Text } from "lucide-react";
import React, { useState, FormEvent } from "react";
import { Button } from "../components/button";
import { useApi } from "../hooks/useApi";
import "../css/create-update-modal.css";

export const CreateUpdateModal = ({
  idJob,
  updateJobs,
  addJob,
}: CreateUpdateModalProps) => {
  const [fileName, setFileName] = useState<string>("");
  const { handleCloseModal, isEditing } = useFormModalContext();
  const { post, put, error } = useApi();

  // Lida com a informação do arquivo de imagem
  const handleFileToggle = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if ("files" in target) {
      const file = target.files?.[0];
      setFileName(file ? file.name : "");
    }
  };

  // Cria ou atualiza um job
  const createUpdateJob = async (
    event: FormEvent<HTMLFormElement>,
    isEditing: boolean
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      if (isEditing && idJob) {
        const response = await put(formData, `/api/jobs/${idJob}/`);
        updateJobs(response);
        console.log(response);
      } else {
        const response = await post(formData, "/api/jobs/");
        addJob(response);
      }

      handleCloseModal();
    } catch (error) {
      throw new Error(
        `Error during ${isEditing ? "edit" : "creation"}: ${error}`
      );
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{isEditing ? "Editar" : "Cadastrar"} trabalho</h2>
          <X className="close-button" onClick={handleCloseModal} />
        </div>
        <form onSubmit={(event) => createUpdateJob(event, isEditing)}>
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
              name="image"
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleFileToggle}
            />
            {fileName && (
              <div className="file-info">
                <p className="file-name">{`Arquivo escolhido: ${fileName}`}</p>
              </div>
            )}
          </div>
          <Button size="2">{isEditing ? "Editar" : "Salvar"}</Button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};
