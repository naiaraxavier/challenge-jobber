import { CreateUpdateModal } from "../components/create-update-modal";
import { useFormModalContext } from "../hooks/useFormModalContext";
import { CardJob } from "../components/card-job";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { Plus } from "lucide-react";
import "../css/home-page.css";

export const HomePage: React.FC = () => {
  const { handleRegistrationModal, isFormOpen } = useFormModalContext();

  return (
    <>
      <Header />

      <main className="main-content">
        <div className="main-content__container">
          <div className="main-content__header">
            <h2>Lista de trabalhos</h2>
            <Button size="1" onClick={handleRegistrationModal}>
              <Plus size={18} strokeWidth={3} />
              Cadastrar trabalho
            </Button>
          </div>
          <ul className="main-content__title">
            <li>Título</li>
            <li>Descrição</li>
            <li>Criado em</li>
          </ul>
        </div>

        <CardJob />

        {isFormOpen && <CreateUpdateModal />}
      </main>

      <footer></footer>
    </>
  );
};
