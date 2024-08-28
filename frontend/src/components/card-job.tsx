import { Ellipsis, Pencil, Trash2 } from "lucide-react";
import logo from "../assets/img/logo.svg";
import { useState } from "react";
import "../css/card-job.css";

export function CardJob() {
  const [showActions, setShowActions] = useState<boolean>(false);

  const handleModalBtns = (): void => {
    setShowActions(!showActions);
  };

  return (
    <div className="card__content">
      <Ellipsis
        size={28}
        className="ellipsis-button"
        onClick={handleModalBtns}
      />
      <div className="card__content--img">
        <img src={logo} alt="Imagem" />
      </div>
      <div className="card__content--info">
        <p className="card__content--title">Desenvolvedor Python</p>
        <p className="card__content--description">
          Desenvolvimento de aplicações web utilizando Python e Django.
        </p>
        <p className="card__content--date">22/08/2024</p>
      </div>

      <div
        className={`modal-overlay ${showActions ? "visible" : ""}`}
        onClick={handleModalBtns}
      ></div>

      <div
        className={`card__content--actions ${showActions ? "visible" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-actions--btns">
          <Pencil className="update-button" />
          <Trash2 className="delete-button" />
        </div>
      </div>
    </div>
  );
}
