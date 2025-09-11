import { Button } from "../ui/button";

export function Header() {
  return (
    <div className="bg-black">
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-tl from-black/15 to-transparent">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-black text-lg">Logo</h1>
          <ul className="flex gap-6 py px-2 text-purple-900 items-center">
            <li>Oque é</li>
            <li>Leis Sistêmicas</li>
            <li>Como funciona</li>
            <li>Transformações</li>
            <li>FAQ</li>
          </ul>
          <Button className="text-white bg-purple-800 justify-end">
              Marcar Consulta
            </Button>
        </nav>
      </header>
    </div>
  );
}
