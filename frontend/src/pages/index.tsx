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
            <Button size="1">Adicionar Trabalho</Button>
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
