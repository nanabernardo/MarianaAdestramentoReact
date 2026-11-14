import Cindy from "../assets/Eu_Cindy.JPG";
import Goldens from "../assets/Goldens.jpg";
import Tequila from "../assets/Tequila.jpg";
import SRDBranca from "../assets/srd_branca2.jpg";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../components/Button";
import ResponsiveGallery from "../components/ResponsiveGallery";
import ServiceCard from "../components/ServiceCard";
import SectionHeader from "../components/SectionHeader";
import { gruposAdestramento } from "../data/servicos";
import CTASection from "../components/CTASection";
import { links } from "../data/contato";
import { diferenciais } from "../data/diferenciais";

const Adestramento = () => {
  const images = [
    { src: Goldens, alt: "Goldens" },
    { src: Tequila, alt: "Tequila" },
    { src: SRDBranca, alt: "SRD Branca" },
  ];
  return (
    <>
      {/* abertura */}
      <section className="px-6 pt-12 pb-16 lg:pt-20">
        {/* no celular, o texto fica em cima e a foto embaixo. a partir de md, os dois ficam lado a lado */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-10 lg:gap-16">
          {/* coluna do texto: flex-1 ocupa todo o espaço que a foto não usar */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm font-bold uppercase tracking-wider text-hoverbtn">
              Adestramento com reforço positivo
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-semibold leading-tight text-white">
              Um cão mais calmo, uma rotina mais leve
            </h1>
            <p className="max-w-xl text-lg lg:text-xl text-white">
              Oferecemos atendimento personalizado, com utilização de
              reforçadores positivos para que seu melhor amigo tenha também uma
              experiência divertida e estimulante.
            </p>
            {/* Empilhados no celular, lado a lado a partir de sm */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button to="/contato">Agendar avaliação</Button>
              <Button href={links.whatsapp} variant="outline">
                <FaWhatsapp aria-hidden="true" />
                Chamar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Coluna da foto: no celular, até max-w-sm e centralizada;
        No computador, 1/3 da largura */}
          <div className="w-full max-w-sm mx-auto md:w-1/3 md:max-w-md">
            <img
              src={Cindy}
              alt="Mariana abraçada com a Cindy, cadela de pelo cinza malhado"
              className="w-full aspect-4/5 object-cover object-[center_40%] rounded-3xl shadow-card"
            />
          </div>
        </div>
      </section>

      {/* =======Diferenciais======== */}
      <section className="bg-primary-dark px-6 py-8">
        <ul className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {diferenciais.map(({ texto, icone: Icone }) => (
            <li key={texto} className="flex items-center gap-4 text-white">
              {/* shrink-0: o ícone não amassa quando o texto quebra em duas linhas */}
              <Icone
                size={32}
                aria-hidden="true"
                className="shrink-0 text-highlight"
              />
              <span className="text-lg font-semibold">{texto}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* =======Serviços, em 2 grupos======= */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {/* map de fora: um bloco para cada grupo */}
          {gruposAdestramento.map((grupo) => (
            <div key={grupo.titulo}>
              {/* h2 (padrão do SectionHeader): o grupo fica abaixo do h1 da abertura */}
              <SectionHeader
                title={grupo.titulo}
                subtitle={grupo.subtitulo}
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* map de dentro: um card para cada serviço DESTE grupo */}
                {grupo.servicos.map((servico) => (
                  <ServiceCard
                    key={servico.titulo}
                    title={servico.titulo}
                    description={servico.descricao}
                    icon={servico.icone}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =======Resto da página======= */}
      <section className="px-6 py-16">
        <ResponsiveGallery images={images} />

        <CTASection />
      </section>
    </>
  );
};

export default Adestramento;
