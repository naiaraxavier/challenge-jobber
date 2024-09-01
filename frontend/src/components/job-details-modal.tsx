import { JobDetailsModalProps } from "../interfaces/interfaces";
import imageDefault from "../assets/img/default.svg";
import { formatDate } from "../utils/format-date";
import "../css/job-details-modal.css";
import { X } from "lucide-react";

export const JobDetailsModal = ({
  handleDetailsModal,
  image,
  title,
  description,
  created_at,
}: JobDetailsModalProps) => {
  return (
    <div className="overlay">
      <div className="details-job__modal">
        <div className="close-details-modal">
          <X className="close" onClick={handleDetailsModal} />
        </div>
        <div className="info-details__wrapper">
          <div className="info-details__image">
            <img src={image || imageDefault} alt="Imagem" />
          </div>
          <div className="info-details__container">
            <p className="info-details__title">
              <span>Título: </span>
              {title}
            </p>
            <p className="info-details__description">
              <span>Descrição:</span> {description}
            </p>
            <p className="info-details__created">
              <span>Criado em:</span> {formatDate(created_at)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
