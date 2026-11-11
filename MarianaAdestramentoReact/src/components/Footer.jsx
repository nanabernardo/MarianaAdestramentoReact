import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";
import logo from "../assets/logo-fundo-roxo.png";
import { links } from "../data/contato";

// lista das páginas do site, no mesmo esquema da etapa4:
// uma lista (objeto) por página. Fica FORA do componente porque nunca muda, então não precisa ser recriada a cada renderização
const paginas = [
  { nome: "Home", caminho: "/" },
  { nome: "Adestramento", caminho: "/adestramento" },
  { nome: "Consulta", caminho: "/consulta" },
  { nome: "Socialização", caminho: "/socializacao" },
  { nome: "Pacotes de aulas", caminho: "/pacotes" },
  { nome: "Contato", caminho: "/contato" },
];

const Footer = () => {
  // Pega o ano de HOJE no computador de quem está visitando o site
  // Fica DENTRO do componente porque precisa ser calculado na hora

  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white ">
      {/* Área de 3 colunas. Celular: 1 coluna (empilhado). A partir de md (768px): 3 colunas */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* coluna 1: marca */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img
            src={logo}
            alt="Mariana Bernardo Adestramento"
            className="h-16 w-auto"
          />
          <p className="text-white/80 max-w-xs">Adestrando cães desde 2014.</p>
        </div>

        {/* coluna 2: páginas. aria-label diferencia este menu do menu principal (Navbar) para quem usa leitor de tela */}
        <nav aria-label="Páginas do site">
          <h2 className="font-display font-semibold text-highlight text-lg mb-4">
            Páginas
          </h2>
          <ul className="flex flex-col gap-2">
            {/* map: para cada página da lista, devolve um <li> com um Link */}
            {paginas.map(({ nome, caminho }) => (
              <li key={caminho}>
                <Link
                  to={caminho}
                  className="hover:text-highlight transition-colors"
                >
                  {nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* coluna 3: contato */}
        <div>
          <h2 className="font-display font-semibold text-highlight text-lg mb-4">
            Fale comigo
          </h2>
          <p className="text-white/80">Me chame no Whatsapp ou nas redes:</p>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight underline hover:text-hoverbtn"
          >
            Chamar no Whatsapp
          </a>
          <SocialMediaIcons className="justify-center md:justify-start pt-4" />
        </div>
      </div>

      {/* faixa final, separada por uma linha bem fraquinha */}
      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-6 py-4 text-sm text-white/70 text-center">
          {/* As chaves {} fazem o JSX mostrar o VALOR da variável */}
          &copy; {anoAtual} Mariana Bernardo Adestramento. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
