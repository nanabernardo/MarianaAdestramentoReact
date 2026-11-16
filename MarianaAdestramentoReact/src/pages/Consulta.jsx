import LanduPiaf from "../assets/Landu_Piaf.jpg";
import Schnauzer from "../assets/Schnauzer.jpg";
import ResponsiveGallery from "../components/ResponsiveGallery";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { links } from "../data/contato";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import { destaquesConsulta } from "../data/consulta";

const Consulta = () => {
  const images = [
    { src: LanduPiaf, alt: "Landu e Piaf" },
    { src: Schnauzer, alt: "Schnauzer" },
  ];
  return (
    <>
      {/* abertura: sem imageClassName e sem imageAspect, valem os padrões
          do PageHero (object-center e aspect-4/5) */}
      <PageHero
        eyebrow="Consulta comportamental"
        title="Entender o porquê para mudar o comportamento"
        text="Uma avaliação personalizada do comportamento do seu cão, a partir do que você precisa."
        image={Schnauzer}
        imageAlt="Mariana sorrindo, com um schnauzer de pelo cinza no colo"
      >
        <Button to="/contato">Agendar uma consulta</Button>
        <Button href={links.whatsapp} variant="outline">
          <FaWhatsapp aria-hidden="true" />
          Chamar no WhatsApp
        </Button>
      </PageHero>

      {/* =======O que é a consulta======= */}
      {/* sem padding em cima: a abertura já termina com espaço (pb-16) */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="O que é a consulta"
            subtitle="Um olhar de perto para identificar e corrigir comportamentos que incomodam."
            className="mb-10"
          />

          {/* 3 cards: 1 coluna no celular, 3 a partir de md */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destaquesConsulta.map((destaque) => (
              <ServiceCard
                key={destaque.titulo}
                title={destaque.titulo}
                description={destaque.descricao}
                icon={destaque.icone}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="p-6 text-center text-white">
        <p className="text-white mb-6 text-center max-w-2xl mx-auto text-xl">
          São duas visitas, com um intervalo ideal de 15 dias. Nesse período,
          mantemos contato por whatsapp para sanar qualquer nova dúvida e melhor
          orientar no processo de trabalho comportamental do seu melhor amigo.
        </p>

        <ResponsiveGallery images={images} />
      </section>
    </>
  );
};

export default Consulta;
