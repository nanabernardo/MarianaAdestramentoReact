import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; //incones hamburger e x
import { paginas } from "../data/paginas";

// Visual dos links
const base =
  "text-lg inline-block text-white font-semibold px-4 py-2 decoration-2 underline-offset-8";
const ativo = "underline decoration-highlight"; //pagina atual laranja
const inativo = "hover:underline decoration-white/40"; //demais: discretas

// O NavLink chama esta função SOZINHO, entregando {isActive}. Ela devolve a string de classes certa para cada caso
const classesDoLink = ({ isActive }) => `${base} ${isActive ? ativo : inativo}`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // true quando a página já rolou um pouco para baixo
  const [rolou, setRolou] = useState(false);

  // useEffect: roda DEPOIS que o componente aparece na tela
  useEffect(() => {
    // função que confere a rolagem: mais de 10px desde o topo = rolou
    const verificarRolagem = () => setRolou(window.scrollY > 10);

    verificarRolagem(); // confere já na chegada (ex: recarregou no meio da página)
    window.addEventListener("scroll", verificarRolagem); // começa a vigiar a rolagem

    //limpeza: quando a Navbar sai da Tela, para de vigiar
    return () => window.removeEventListener("scroll", verificarRolagem);
  }, []); // [] vazio: liga o "porteiro" UMA vez só, quando a Navbar aparece

  // Fecha o menu mobile com a tecla Esc
  useEffect(() => {
    // Menu fechado: não há o que fechar, então nem criamos o listener
    if (!isOpen) return;

    // Função com nome: o removeEventListener precisa receber exatamente a mesma função que o addEventListener recebeu
    function fecharComEsc(evento) {
      if (evento.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", fecharComEsc);

    // Limpeza roda quando isOpen muda (o menu fechou) ou quando a Navbar sai da tela
    return () => {
      document.removeEventListener("keydown", fecharComEsc);
    };
  }, [isOpen]); // roda de novo sempre que o menu abre ou fecha

  return (
    <nav
      className={`lg:sticky lg:top-0 lg:z-30  p-4 flex justify-between items-center  transition-all duration-300 ${
        rolou ? "bg-secondary lg:bg-primary-dark lg:shadow-lg" : "bg-secondary"
      }`}
    >
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
          type="button" // não é botão de formulário (mesma regra do Button)
          aria-label="Menu" // nome do botão para o leitor de tela, já que só tem um ícone
          aria-expanded={isOpen} // avisa se o menu está aberto (true) ou fechado (false)
          className="lg:hidden  text-white z-60 relative hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* aria-hidden: o ícone é só enfeite, o nome já está no aria-label */}
          {isOpen ? (
            <X size={28} aria-hidden="true" />
          ) : (
            <Menu size={28} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu mobile (abre ao clicar) */}
      {isOpen && (
        <>
          {/*  Overlay  */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true" // é só um funda para clicar e fechar, o leitor de tela ignora
          ></div>
          {/*  Menu mobile */}
          <ul className="absolute top-20 right-4 lg:hidden flex flex-col items-center gap-4 bg-primary p-4 rounded-3xl shadow-lg z-50">
            {paginas.map(({ nome, caminho }) => (
              <li key={caminho}>
                <NavLink
                  to={caminho}
                  end
                  className={classesDoLink}
                  onClick={() => setIsOpen(false)} // fecha o meno ao escolher
                >
                  {nome}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* <div className="absolute top-20 right-4 lg:hidden flex flex-col items-center gap-4 bg-primary p-4 rounded-3xl shadow-lg z-50">
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
          </div> */}
        </>
      )}
    </nav>
  );
};

export default Navbar;
