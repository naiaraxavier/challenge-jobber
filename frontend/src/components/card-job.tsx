import { useFormModalContext } from "../hooks/useFormModalContext";
import { Ellipsis, Pencil, Trash2 } from "lucide-react";
import { CardJobProps } from "../interfaces/interfaces";
import logo from "../assets/img/logo.svg";
import { useState } from "react";
import "../css/card-job.css";

export const CardJob = ({ job }: CardJobProps) => {
  // props
  const { title, description, image, created_at } = job;

  // lida com modal de ações (editar/deletar) no mobile
  const [showActions, setShowActions] = useState<boolean>(false);
  const { handleEditModal } = useFormModalContext();

  // Formata a data que vem da API
  const formatDate = (dateString: string): string => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  // Abre modal e fecha modal de ações (editar/deletar)
  const handleEditButtonClick = () => {
    handleEditModal();
    setShowActions(false);
  };

  return (
    <div className="card__content">
      <Ellipsis
        size={28}
        className="ellipsis-button"
        onClick={() => setShowActions(!showActions)}
      />
      <div className="card__content--img">
        <img src={image || logo} alt="Imagem" />
      </div>
      <div className="card__content--info">
        <p className="card__content--title">{title}</p>
        <p className="card__content--description">{description}</p>
        <p className="card__content--date">{formatDate(created_at)}</p>
      </div>

      <div
        className={`modal-overlay ${showActions ? "visible" : ""}`}
        onClick={() => setShowActions(!showActions)}
      ></div>

      <div
        className={`card__content--actions ${showActions ? "visible" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-actions--btns">
          <Pencil className="update-button" onClick={handleEditButtonClick} />
          <Trash2 className="delete-button" />
        </div>
      </div>
    </div>
  );
};
