import { Plus } from "lucide-react";
import { Button } from "../components/button";
import { Header } from "../components/header";
import "../css/home-page.css";

export function HomePage() {
  return (
    <>
      <Header />

      <main className="main-content">
        <div className="main-content__container">
          <div className="main-content__header">
            <h2>Lista de trabalhos</h2>
            <Button size="1">
              <Plus size={20} strokeWidth={3} />
              Cadastrar
            </Button>
          </div>

          <ul className="main-content__title">
            <li>Título</li>
            <li>Descrição</li>
            <li>Criado em</li>
          </ul>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
