import { Link } from "react-router-dom";

// Classes que TODO botão tem, não importa a variante.
// Ficam fora do componente porque nunca mudam: assim não são
// recriadas a cada vez que o botão aparece na tela.
const base =
  // inline-flex: o botão continua do tamanho do conteúdo (como o inline-block),
  // mas agora alinha ícone + texto lado a lado, centralizados, com espaço entre eles.
  "inline-flex items-center justify-center gap-2 font-semibold px-4 py-2 rounded-3xl transition-colors";

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
  outlineDark:
    "border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white",
};

const Button = ({
  to,
  href, // link para fora do site ou âncora na mesma página (#id)
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

  if (href) {
    // Âncora = endereço que começa com "#": leva a uma parte DESTA página
    // (ex.: "#planos" procura o elemento com id="planos").
    // Todo o resto (WhatsApp, Instagram...) é site de fora.
    const isAnchor = href.startsWith("#");

    return (
      <a
        href={href}
        // undefined = o React nem escreve o atributo no HTML.
        // Âncora: fica na mesma aba. Site de fora: abre aba nova,
        // com rel por segurança (a outra aba não controla a nossa).
        target={isAnchor ? undefined : "_blank"}
        rel={isAnchor ? undefined : "noopener noreferrer"}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

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
