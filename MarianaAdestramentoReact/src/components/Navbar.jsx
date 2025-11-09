import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; //incones hamburger e x

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="ml-10">
        <a href="/" title="Voltar à página inicial">
          <img
            src={logo}
            alt="Logo Mariana Adestramento"
            className="h-30 w-auto gap-3"
          />
        </a>
      </div>
      <div className="flex mx-auto justify-between">
        {/* botões desktop */}
        <ul className="hidden md:flex mx-auto gap-6 text-white">
          {/* Links de navegação para cada página*/}
          <li>
            <Button to="/">Home</Button>
          </li>
          <li>
            <Button to="/adestramento">Adestramento</Button>
          </li>
          <li>
            <Button to="/consulta">Consulta</Button>
          </li>
          <li>
            <Button to="/socializacao">Socialização</Button>
          </li>
          <li>
            <Button to="/contato">Contato</Button>
          </li>
        </ul>

        {/* icone hamburgues (mobile) */}
        <button
          className="md:hidden text-white z-20 relative hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile (abre ao clicar) */}
      {isOpen && (
        <>
          {/*  Overlay  */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          {/*  Menu mobile */}
          <div className="absolute top-20 right-4 md:hidden flex flex-col items-center gap-4 bg-primary p-4 rounded-3xl shadow-lg z-50">
            <Button to="/">Home</Button>
            <Button to="/adestramento">Adestramento</Button>
            <Button to="/consulta">Consulta</Button>
            <Button to="/socializacao">Socialização</Button>
            <Button to="/contato">Contato</Button>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
