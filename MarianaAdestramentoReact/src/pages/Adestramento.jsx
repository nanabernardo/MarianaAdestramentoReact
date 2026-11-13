import Cindy from "../assets/Eu_Cindy.JPG";
import Goldens from "../assets/Goldens.jpg";
import Tequila from "../assets/Tequila.jpg";
import SRDBranca from "../assets/srd_branca2.jpg";
import ResponsiveGallery from "../components/ResponsiveGallery";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import { servicosAdestramento } from "../data/servicos";
import CTASection from "../components/CTASection";

const Adestramento = () => {
  const images = [
    { src: Cindy, alt: "Cindy" },
    { src: Goldens, alt: "Goldens" },
    { src: Tequila, alt: "Tequila" },
    { src: SRDBranca, alt: "SRD Branca" },
  ];
  return (
    <section className="bg-primary min-h-screen p-6">
      <SectionHeader
        as="h1"
        title="Adestramento"
        subtitle="Oferecemos atendimento personalizado, com utilização de reforçadores positivos para que seu melhor amigo tenha também uma experiência divertida e estimulante."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 max-w-6xl mx-auto">
        {/* um card para cada serviço da lista */}
        {servicosAdestramento.map((servico) => (
          <ServiceCard
            key={servico.titulo}
            as="h2"
            title={servico.titulo}
            description={servico.descricao}
          />
        ))}
      </div>
      <div className="mt-8">
        <ResponsiveGallery images={images} />
      </div>
      <CTASection />
    </section>
  );
};

export default Adestramento;
