import { Button } from "../ui/button";

export function Header() {
  return (
    <div className="bg-white">
      <header className="top-0 left-0 w-full z-50 bg-gradient-to-tl from-black/15 to-transparent">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-black text-lg">Logo</h1>
          <ul className="flex gap-6 py px-2 text-purple-900 items-center text-lg scroll-smooth">
            <a href="#sobre">O que é</a>
            <a href="#leis">Leis Sistêmicas</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#beneficios">Transformações</a>
            <a href="#questions-frequency">FAQ</a>
          </ul>
          <Button className="text-white bg-purple-800 justify-end">
              Marcar Consulta
            </Button>
        </nav>
      </header>
    </div>
  );
}
 