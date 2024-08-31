import { CreateUpdateModalProps } from "../interfaces/interfaces";
import { useFormModalContext } from "../hooks/useFormModalContext";
import React, { useState, FormEvent, useEffect } from "react";
import { Tag, X, ImageUp, Text } from "lucide-react";
import { Button } from "../components/button";
import { useApi } from "../hooks/useApi";
import "../css/create-update-modal.css";

export const CreateUpdateModal = ({
  idJob,
  updateJobs,
  addJob,
}: CreateUpdateModalProps) => {
  const { handleCloseModal, isEditing } = useFormModalContext();
  const [checkFields, setCheckFields] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const { post, put, getById } = useApi();

  /* dataLoaded evita que os dados sejam
  chamados toda vez que o componente renderiza
  possibilidando mudar os valores do input */

  useEffect(() => {
    // Carregar dados do job para edição
    if (isEditing && idJob && !dataLoaded) {
      getById(`/api/jobs/${idJob}/`)
        .then((response) => {
          setTitle(response.title || "");
          setDescription(response.description || "");
          setFileName(response.image || "");
          setDataLoaded(true);
        })
        .catch((err) => {
          console.error("Erro ao carregar job", err);
        });
    }
  }, [isEditing, idJob, getById, dataLoaded]);

  console.log("depois if " + dataLoaded);

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

    const title = formData.get("title")?.toString().trim();
    const description = formData.get("description")?.toString().trim();

    if (!title || !description) {
      setCheckFields("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      if (isEditing && idJob) {
        const response = await put(formData, `/api/jobs/${idJob}/`);
        updateJobs(response);
      } else {
        const response = await post(formData, "/api/jobs/");
        addJob(response);
      }
    } catch (error) {
      throw new Error(
        `Error during ${isEditing ? "edit" : "creation"}: ${error}`
      );
    } finally {
      handleCloseModal();
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
            <input
              name="title"
              placeholder="Título"
              className="input--title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <Text className="tag" />
            <input
              name="description"
              placeholder="Descrição"
              className="input--description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
          {checkFields && (
            <div className="check-fields__message">{checkFields}</div>
          )}
        </form>
      </div>
    </div>
  );
};
