import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; //incones hamburger e x

//Lista das páginas: alimenta o menu do computador e o do celular
//Fica fora do componente porque nunca muda

const paginas = [
  { nome: "Home", caminho: "/" },
  { nome: "Adestramento", caminho: "/adestramento" },
  { nome: "Consulta", caminho: "/consulta" },
  { nome: "Socialização", caminho: "/socializacao" },
  { nome: "Pacotes de aulas", caminho: "/pacotes" },
  { nome: "Contato", caminho: "/contato" },
];

// Visual dos links
const base =
  "text-lg inline-block text-white font-semibold px-4 py-2 decoration-2 underline-offset-8";
const ativo = "underline decoration-highlight"; //pagina atual laranja
const inativo = "hover:underline decoration-white/40"; //demais: discretas

// O NavLink chama esta função SOZINHI+O, entregando {isActive}. Ela devolve a string de classes certa para cada caso
const classesDoLink = ({ isActive }) => `${base} ${isActive ? ativo : inativo}`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="ml-10">
        <Link to="/" title="Voltar à página inicial">
          <img
            src={logo}
            alt="Logo Mariana Adestramento"
            className="h-30 w-auto"
          />
        </Link>
      </div>

      <div className="flex mx-auto justify-between">
        {/* botões desktop */}
        <ul className="hidden lg:flex mx-auto gap-2">
          {paginas.map(({ nome, caminho }) => (
            <li key={caminho}>
              {/* end> só fica ativo se o endereço for EXATAMENTE este */}
              <NavLink to={caminho} end className={classesDoLink}>
                {nome}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* icone hamburgues (mobile) */}
        <button
          className="lg:hidden text-white z-20 relative hover:cursor-pointer"
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
          <div className="absolute top-20 right-4 lg:hidden flex flex-col items-center gap-4 bg-primary p-4 rounded-3xl shadow-lg z-50">
            {paginas.map(({ nome, caminho }) => (
              <NavLink
                key={caminho}
                to={caminho}
                end
                className={classesDoLink}
                onClick={() => setIsOpen(false)} //fecha o menu ao escolher
              >
                {nome}
              </NavLink>
            ))}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
