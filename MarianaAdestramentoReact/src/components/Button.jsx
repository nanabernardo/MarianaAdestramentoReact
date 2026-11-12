import { Link } from "react-router-dom";

// Classes que TODO botão tem, não importa a variante.
// Ficam fora do componente porque nunca mudam: assim não são
// recriadas a cada vez que o botão aparece na tela.
const base =
  "inline-block font-semibold px-4 py-2 rounded-3xl transition-colors";

// Um objeto que funciona como "cardápio" de visuais.
// A chave (primary, secondary) é o nome que você passa em variant="...".
const variants = {
  // Laranja com texto ink: contraste 7,6:1
  primary: "bg-highlight text-ink hover:bg-hoverbtn",
  // Roxo com texto branco; no hover, escurece para o roxo mais fundo.
  secondary: "bg-secondary text-white hover:bg-primary-dark",
  //variante teste
  outline:
    "border text-white border-highlight hover:bg-highlight hover:text-ink",
};

const Button = ({
  to,
  children,
  variant = "primary", // valor padrão: se ninguém disser nada, é laranja
  type = "button", // padrão seguro: não envia formulário sem querer
  className = "", // padrão vazio, para não aparecer "undefined" nas classes
  ...rest // "o resto": tudo que não foi listado acima (onClick, disabled...)
}) => {
  // Junta as três partes numa string só.
  // O "?? variants.primary" é uma rede de segurança: se alguém escrever
  // uma variante que não existe (ex.: "secundary"), usa a primary.
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  // Se veio "to", é navegação entre páginas: usamos o Link do React Router.
  // Link não tem "type" (não é um botão de verdade), por isso não passamos.
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  // Sem "to", é uma ação na própria página: um <button> de verdade.
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
