import { Plus } from "lucide-react";
import { Button } from "../components/button";
import { Header } from "../components/header";
import "../css/home-page.css";
import { CardJob } from "../components/card-job";

export function HomePage() {
  return (
    <>
      <Header />

      <main className="main-content">
        <div className="main-content__container">
          <div className="main-content__header">
            <h2>Lista de trabalhos</h2>
            <Button size="1">
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
      </main>

      <footer></footer>
    </>
  );
}
