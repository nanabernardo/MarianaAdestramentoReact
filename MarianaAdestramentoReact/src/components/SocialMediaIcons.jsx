import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { links } from "../data/contato";

// A "planilha": uma linha (objeto) por rede social
// Fica fora do componente porque nunca muda.

const redes = [
  { nome: "WhatsApp", url: links.whatsapp, Icone: FaWhatsapp },
  { nome: "Facebook", url: links.facebook, Icone: FaFacebook },
  { nome: "Instagram", url: links.instagram, Icone: FaInstagram },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 p-6">
      {/* map: para cada rede da lista, devolve um <a> */}
      {redes.map(
        (
          { nome, url, Icone }, //tranforma cada objeto de dados num <a>
        ) => (
          <a
            key={nome} // identidade única de cada item da lista (seção 5)
            href={url}
            target="_blank" // abre em nova aba
            rel="noopener noreferrer" // impede a nova aba de controlar o site
            aria-label={`${nome} da Mariana (abre em nova aba)`}
            className="bg-highlight hover:bg-hoverbtn transition-colors rounded-full w-12 h-12 flex items-center justify-center"
          >
            {/* aria-hidden: o ícone é só enfeite; quem dá o nome é o aria-label */}
            <Icone size={24} className="text-ink" aria-hidden="true"></Icone>
          </a>
        ),
      )}
    </div>
  );
};

export default SocialMediaIcons;
