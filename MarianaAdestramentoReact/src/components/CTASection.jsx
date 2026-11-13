import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button";
import { links } from "../data/contato";
import SectionHeader from "./SectionHeader";

// Bloco de chamada para contato (CTA = "call to action", chamada para ação).
// Vai no fim das páginas: depois de ler sobre o serviço, a pessoa já
// encontra os dois caminhos para falar com a Mariana.

const CTASection = ({
  title = "Vamos conversar?",
  text = "Conte um pouco sobre o seu cão e eu te ajudo a escolher o melhor caminho.",
  className = "mt-16", //espaço acima; quem usa pode trocar
}) => {
  return (
    <section
      className={`max-w-6xl mx-auto  bg-primary-dark text-white rounded-3xl px-8 py-12 flex flex-col items-center gap-4 text-center ${className}`}
    >
      {/*  título laranja + texto branco: o mesmo padrão dos outros títulos do site */}
      <SectionHeader title={title} subtitle={text} className=""/>

      {/* empilhados no celular, lado a lado a partir de sm */}
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Button href={links.whatsapp} variant="primary">
          {/* o ícone é enfeite: o texto ao lado já diz o que o botão faz */}
          <FaWhatsapp aria-hidden="true" />
          Chamar no WhatsApp
        </Button>
        <Button to="/contato" variant="outline">
          Enviar mensagem
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
