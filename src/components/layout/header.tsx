"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="top-0 left-0 w-full z-50 bg-gradient-to-tl from-black/15 to-transparent">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-black text-lg font-semibold">Logo</h1>

          {/* Links desktop */}
          <ul className="hidden md:flex gap-6 px-2 text-purple-900 items-center text-lg">
            <a href="#sobre" className="hover:text-purple-700">O que é</a>
            <a href="#leis" className="hover:text-purple-700">Leis Sistêmicas</a>
            <a href="#como-funciona" className="hover:text-purple-700">Como funciona</a>
            <a href="#beneficios" className="hover:text-purple-700">Transformações</a>
            <a href="#questions-frequency" className="hover:text-purple-700">FAQ</a>
          </ul>

          {/* Botão desktop */}
          <div className="hidden md:block">
            <Button className="text-white bg-purple-800 hover:bg-purple-900">
              Marcar Consulta
            </Button>
          </div>

          {/* Botão menu mobile */}
          <button
            className="md:hidden text-purple-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-white shadow-lg border-t border-purple-100">
            <a href="#sobre" className="hover:text-purple-700">O que é</a>
            <a href="#leis" className="hover:text-purple-700">Leis Sistêmicas</a>
            <a href="#como-funciona" className="hover:text-purple-700">Como funciona</a>
            <a href="#beneficios" className="hover:text-purple-700">Transformações</a>
            <a href="#questions-frequency" className="hover:text-purple-700">FAQ</a>
            <Button className="text-white bg-purple-800 w-40 hover:bg-purple-900">
              Marcar Consulta
            </Button>
          </div>
        )}
      </header>
    </div>
  );
}
