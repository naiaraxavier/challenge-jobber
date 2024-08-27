import { Plus } from "lucide-react";
import { Button } from "../components/button";
import { Header } from "../components/header";

export function HomePage() {
  return (
    <>
      <Header />

      <main>
        <div>
          <div>
            <div>
              <h2>Lista de trabalhos</h2>
            </div>
            <Button size="1">
              <Plus size={20} strokeWidth={3} />
              Cadastrar trabalho
            </Button>
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
