import { useFormModalContext } from "../hooks/useFormModalContext";
import { Ellipsis, Pencil, Trash2 } from "lucide-react";
import { CardJobProps } from "../interfaces/interfaces";
import { JobDetailsModal } from "./job-details-modal";
import imageDefault from "../assets/img/default.svg";
import { formatDate } from "../utils/format-date";
import { useState } from "react";
import "../css/card-job.css";

export const CardJob = ({ job, onDelete, handleEdit }: CardJobProps) => {
  // props
  const { id, title, description, image, created_at } = job;

  // lida com modal de ações (editar/deletar) no mobile
  const [showActions, setShowActions] = useState<boolean>(false);

  // Modal de detalhes do job
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  // contexto
  const { handleEditModal } = useFormModalContext();

  // Abre e fecha modal de ações (editar/deletar)
  const handleEditButtonClick = () => {
    handleEditModal();
    setShowActions(false);
    handleEdit(id);
  };

  //Abre e fecha modal com detalhes do job
  const handleDetailsModal = () => {
    setIsDetailsModalOpen(!isDetailsModalOpen);
  };

  return (
    <>
      <div className="card__content">
        <Ellipsis
          size={28}
          className="ellipsis-button"
          onClick={() => setShowActions(!showActions)}
        />
        <div
          className="card__content-onclick"
          onClick={() => handleDetailsModal()}
        >
          <div className="card__content--img">
            <img src={image || imageDefault} alt="Imagem" />
          </div>
          <div className="card__content--info">
            <p className="card__content--title">{title}</p>
            <p className="card__content--description">{description}</p>
            <p className="card__content--date">{formatDate(created_at)}</p>
          </div>

          <div
            className={`card__content--actions ${showActions ? "visible" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-actions--btns">
              <Pencil
                className="update-button"
                onClick={handleEditButtonClick}
              />
              <Trash2 className="delete-button" onClick={() => onDelete(id)} />
            </div>
          </div>
        </div>

        <div
          className={`modal-overlay ${showActions ? "visible" : ""}`}
          onClick={() => setShowActions(!showActions)}
        ></div>
      </div>
      {isDetailsModalOpen && !showActions && (
        <JobDetailsModal
          image={image}
          title={title}
          created_at={created_at}
          description={description}
          handleDetailsModal={handleDetailsModal}
        />
      )}
    </>
  );
};
