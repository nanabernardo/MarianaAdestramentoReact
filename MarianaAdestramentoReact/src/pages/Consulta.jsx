import Schnauzer from "../assets/Schnauzer.webp";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { links } from "../data/contato";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import StepsList from "../components/StepsList";
import PhotoGallery from "../components/PhotoGallery";
import { fotosConsulta } from "../data/fotos";
import { destaquesConsulta, passosConsulta } from "../data/consulta";

const Consulta = () => {
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

      {/* =======Como funciona======= */}
      {/* faixa escura de ponta a ponta, como o "Como funciona" da Adestramento */}
      <section className="bg-primary-dark px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Como funciona"
            subtitle="Duas visitas, com intervalo ideal de 15 dias."
            className="mb-10"
          />
          {/* 3 passos: o padrão do StepsList é para 4 (2 e 4 colunas).
              md:grid-cols-3 substitui o padrão inteiro: 1 coluna no celular, 3 a partir de md */}
          <StepsList steps={passosConsulta} className="md:grid-cols-3" />
        </div>
      </section>

      {/* =======Alguns atendimentos + chamada final======= */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Alguns atendimentos" className="mb-10" />

          {/* celular: 1 coluna estreita (max-w-xs), como na Socialização.
              a partir de sm: 3 colunas, e o limite sai (sm:max-w-none) */}
          <PhotoGallery photos={fotosConsulta}/>

          {/* chamada final: os textos padrão do CTASection servem aqui */}
          <CTASection />
        </div>
      </section>
    </>
  );
};

export default Consulta;
