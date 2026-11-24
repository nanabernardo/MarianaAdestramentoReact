import Wendy from "../assets/Wendy.webp";
import JackBebe from "../assets/Jack_bebe.webp";
import Barto from "../assets/Barto.webp";
import EuBlack from "../assets/Eu_Black.webp";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import StepsList from "../components/StepsList";
import ResponsiveImage from "../components/ResponsiveImage";
import CTASection from "../components/CTASection";
import { links, linkWhatsapp } from "../data/contato";
import { pacotes, passosPacotes } from "../data/pacotes";
import { FaWhatsapp } from "react-icons/fa";
import { MapPin } from "lucide-react";

const Pacotes = () => {
  const images = [
    {
      src: Wendy,
      alt: "Border collie merle deitado na grama, com guia vermelha",
    },
    {
      src: JackBebe,
      alt: "Filhote de pelo branco e caramelo sentado num tapete listrado, olhando para cima",
    },
    { src: Barto, alt: "Cão de pelo cinza sentado, sorrindo, com guia rosa" },
  ];

  return (
    <>
      {/* abertura: a foto é deitada, então aspect-4/3 no lugar do padrão
          aspect-4/5 (em pé), que cortaria as laterais */}
      <PageHero
        eyebrow="Pacotes de aulas"
        title="Escolha o ritmo ideal para o seu cão e sua rotina"
        text="De 1 a 3 aulas por semana. Quanto mais meses, maior o desconto."
        image={EuBlack}
        imageAlt="Mariana sorrindo ao lado de um border collie preto e branco"
        imageAspect="aspect-4/3"
        imageClassName="object-left"
      >
        {/* href com # = âncora (13-1): desce até o id="planos", na mesma aba */}
        <Button href="#planos">Ver os pacotes</Button>
        <Button href={links.whatsapp} variant="outline">
          <FaWhatsapp aria-hidden="true" />
          Chamar no WhatsApp
        </Button>
      </PageHero>

      {/* =======Escolha a frequência======= */}
      {/* id="planos": destino do botão "Ver os pacotes" (âncora).
          lg:scroll-mt-40: no computador a barra fica fixa no topo e cobriria
          o título; a rolagem para 10rem (160px) antes. No celular a barra
          rola junto, então não precisa. */}
      <section id="planos" className="px-6 pb-16 lg:scroll-mt-40">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Escolha a frequência"
            subtitle="Quantas aulas por semana combinam com vocês?"
            className="mb-10"
          />
          {/* 3 pacotes: 1 coluna no celular, 3 a partir de md */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {pacotes.map((pacote) => {
              // Chaves no lugar de parênteses: antes de desenhar, calculamos
              // duas coisas. Por isso precisa do "return" lá embaixo.
              const aulas = pacote.aulasPorSemana === 1 ? "aula" : "aulas";
              const mensagem = `Olá, Mariana! Tenho interesse no pacote de ${pacote.aulasPorMes} aulas por mês (${pacote.aulasPorSemana} ${aulas} por semana). Pode me passar o valor para minha região?`;

              return (
                <li
                  key={pacote.aulasPorMes}
                  className="bg-lilac text-primary-dark p-6 md:p-8 rounded-2xl shadow-card flex flex-col items-center gap-2 md:gap-3 text-center"
                >
                  {/* um título só: o leitor de tela lê "4 aulas por mês" junto */}
                  <h3 className="flex flex-col items-center font-display font-semibold">
                    <span className="text-5xl md:text-6xl font-bold leading-none">
                      {pacote.aulasPorMes}
                    </span>
                    <span className="text-xl">aulas por mês</span>
                  </h3>

                  {/* etiqueta laranja; 1 = "aula", o resto = "aulas" */}
                  <p className="rounded-full bg-highlight text-ink text-sm font-bold px-4 py-1">
                    {pacote.aulasPorSemana}{" "}
                    {pacote.aulasPorSemana === 1 ? "aula" : "aulas"} por semana
                  </p>

                  {/* os 3 botões têm o mesmo texto visível; o aria-label diz
                      ao leitor de tela qual pacote cada um escolhe */}
                  <Button
                    href={linkWhatsapp(mensagem)}
                    variant="outlineDark"
                    className="mt-2 md:mt-3"
                    aria-label={`Quero o pacote de ${pacote.aulasPorMes} aulas por mês, pelo WhatsApp`}
                  >
                    <FaWhatsapp aria-hidden="true" />
                    Quero este pacote
                  </Button>
                </li>
              );
            })}
          </ul>

          {/* ícone e texto lado a lado; shrink-0 impede o ícone de achatar
              quando a frase quebra em duas linhas no celular */}
          <p className="mt-10 flex items-center justify-center gap-2 text-lg text-hoverbtn text-center">
            <MapPin aria-hidden="true" className="shrink-0" />
            Os valores variam conforme a região. Peça o seu orçamento pelo
            WhatsApp.
          </p>
        </div>
      </section>

      {/* =======Como montar o seu pacote======= */}
      {/* faixa escura de ponta a ponta, como o "Como funciona" das outras páginas */}
      <section className="bg-primary-dark px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Como montar o seu pacote"
            subtitle="Três passos, sem complicações."
            className="mb-10"
          />
          {/* 3 passos: md:grid-cols-3 substitui o padrão do StepsList (feito para 4) */}
          <StepsList steps={passosPacotes} className="md:grid-cols-3" />
        </div>
      </section>

      {/* =======Alguns alunos + chamada final======= */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Alguns alunos" className="mb-10" />

          {/* celular: 1 coluna estreita; a partir de sm: 3 colunas, sem o limite */}
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

          {/* só o text muda: o title padrão ("Vamos conversar?") continua */}
          <CTASection text="Conte um pouco sobre o seu cão e eu te ajudo a escolher o melhor pacote." />
        </div>
      </section>
    </>
  );
};

export default Pacotes;
