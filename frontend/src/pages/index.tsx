import { CreateUpdateModal } from "../components/create-update-modal";
import { useFormModalContext } from "../hooks/useFormModalContext";
import { CardJob } from "../components/card-job";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { useApi } from "../hooks/useApi";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import "../css/home-page.css";

export const HomePage = () => {
  const { handleRegistrationModal, isFormOpen } = useFormModalContext();
  const { data: jobs, error, isLoading, get } = useApi();

  useEffect(() => {
    get("/api/jobs/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        {isLoading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          jobs?.map((job) => <CardJob key={job.id} job={job} />)
        )}

        {isFormOpen && <CreateUpdateModal />}
      </main>

      <footer></footer>
    </>
  );
};
