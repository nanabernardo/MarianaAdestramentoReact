import Pp from "../assets/Pp.webp";
import DoraBelaParque from "../assets/Dora_Bela_parque.webp";
import Matilha from "../assets/matilha_parque.webp";
import DoraBelaPp from "../assets/Dora_Bela_Pp.webp";
import { FaWhatsapp } from "react-icons/fa";
import { Check } from "lucide-react";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import ResponsiveImage from "../components/ResponsiveImage";
import CTASection from "../components/CTASection";
import {
  sinaisSocializacao,
  areasSocializacao,
  mudancasSocializacao,
} from "../data/socializacao";
import { links } from "../data/contato";

const Socializacao = () => {
  const images = [
    {
      src: Pp,
      alt: "Cachorrinha pequena, pelo preto, num banco de concreto do parque",
    },
    {
      src: DoraBelaParque,
      alt: "Duas cachorras sem raça definida de pelo preto, porte grande, deitadas na grama, com a guia solta",
    },
    {
      src: DoraBelaPp,
      alt: "Três cachorras sem raça definida com pelo preto, duas de grande porte e uma de pequeno porte, sentadas na grama, ao lado de flores cor-de-rosa no parque",
    },
  ];
  return (
    // fragmento: a página passa a ter várias sections, uma ao lado da outra
    <>
      {/* abertura: sem imageClassName, vale o padrão object-center,
          e o recorte do meio já pega os quatro cães */}
      <PageHero
        eyebrow="Socialização guiada e segura"
        title="Mais confiança para encarar o mundo"
        text="Ajudo seu cão a lidar com novos ambientes, sons, pessoas e
              outros animais de forma calma e confiante."
        image={Matilha}
        imageAlt="Quatro cães juntos no parque: um golden retriever deitado, uma cão de pelo branco e comprido, um border collie e um pug preto"
        imageAspect="aspect-1/1"
      >
        <Button to="/contato">Agendar uma avaliação</Button>
        <Button href={links.whatsapp} variant="outline">
          <FaWhatsapp aria-hidden="true" />
          Chamar no WhatsApp
        </Button>
      </PageHero>

      {/* =======Sinais======= */}
      {/* sem padding em cima: a abertura já termina com espaço (pb-16) */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Seu cão precisa de ajuda?"
            subtitle="Estes são os sinais mais comuns."
            className="mb-10"
          />

          {/* 3 cards: 1 coluna no celular, 3 a partir de md
              (3 colunas dividem bem 3 itens) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sinaisSocializacao.map((sinal) => (
              <ServiceCard
                key={sinal.titulo}
                title={sinal.titulo}
                description={sinal.descricao}
                icon={sinal.icone}
              />
            ))}
          </div>

          {/* alerta: laranja claro (hoverbtn) passa no contraste sobre o roxo;
              o laranja forte (highlight) em texto pequeno reprovaria */}
          <p className="mt-10 max-w-2xl mx-auto text-center text-lg font-semibold text-hoverbtn">
            Sem a socialização correta, esse desconforto pode crescer e virar
            agressividade
          </p>
        </div>
      </section>

      {/* =======O que trabalhamos======= */}
      {/* faixa escura de ponta a ponta, como o "Como funciona" da Adestramento */}
      <section className="bg-primary-dark px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="O que trabalhamos"
            subtitle="Um processo guiado, seguro e intencional. Muito além de só levar para passear."
            className="mb-10"
          />

          {/* 4 itens: 2 colunas no celular e 4 a partir de md (as duas dividem 4) */}
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {areasSocializacao.map(({ texto, icone: Icone }) => (
              <li
                key={texto}
                className="flex flex-col items-center gap-3 text-center"
              >
                {/* círculo laranja: mesmo desenho dos números do StepsList.
                    text-ink: o ícone herda a cor do círculo (contraste 7,6:1) */}
                <span className="size-16 rounded-full bg-highlight text-ink flex items-center justify-center">
                  {/* aria-hidden: o texto embaixo já diz tudo; o ícone é enfeite */}
                  <Icone size={32} aria-hidden="true" />
                </span>
                <span className="font-display text-lg font-semibold text-white">
                  {texto}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =======O que muda======= */}
      {/* pb-8: fica mais perto das fotos, que vêm logo depois */}
      <section className="px-6 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="O que muda" className="mb-10" />

          {/* 3 itens: 1 coluna no celular, 3 a partir de md */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* cada item é a própria frase: ela serve de key */}
            {mudancasSocializacao.map((mudanca) => (
              <li key={mudanca} className="flex items-center gap-4">
                {/* shrink-0: o círculo não amassa quando a frase quebra em 2 linhas */}
                <span className="shrink-0 size-10 rounded-full bg-highlight text-ink flex items-center justify-center">
                  {/* strokeWidth={3}: traço mais grosso, o ✓ aparece melhor pequeno */}
                  <Check size={22} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-lg font-semibold text-white">
                  {mudanca}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =======Em boa companhia + chamada final======= */}
      <section className="px-6 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Em boa companhia" className="mb-10" />

          {/* celular: 1 coluna estreita (max-w-xs), como na Adestramento.
              a partir de sm: 3 colunas, e o limite sai (sm:max-w-none) */}
          <div className="max-w-xs mx-auto sm:max-w-none grid grid-cols-1 sm:grid-cols-3 gap-6">
            {images.map((image) => (
              <ResponsiveImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                aspect="1/1"
                className="rounded-2xl shadow-card"
              />
            ))}
          </div>

          <CTASection />
        </div>
      </section>
    </>
  );
};

export default Socializacao;
