import Wendy from "../assets/Wendy.jpg";
import Maya from "../assets/Maya.jpeg";
import Barto from "../assets/Barto.jpg";
import EuBlack from "../assets/Eu_Black.jpeg";
import ResponsiveGallery from "../components/ResponsiveGallery";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import { links, linkWhatsapp } from "../data/contato";
import { pacotes } from "../data/pacotes";
import { FaWhatsapp } from "react-icons/fa";
import { MapPin } from "lucide-react";

const Pacotes = () => {
  const images = [
    { src: Wendy, alt: "Wendy" },
    { src: Maya, alt: "Maya" },
    { src: Barto, alt: "Barto" },
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
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pacotes.map((pacote) => {
              // Chaves no lugar de parênteses: antes de desenhar, calculamos
              // duas coisas. Por isso precisa do "return" lá embaixo.
              const aulas = pacote.aulasPorSemana === 1 ? "aula" : "aulas";
              const mensagem = `Olá, Mariana! Tenho interesse no pacote de ${pacote.aulasPorMes} aulas por mês (${pacote.aulasPorSemana} ${aulas} por semana). Pode me passar o valor para minha região?`;

              return (
                <li
                  key={pacote.aulasPorMes}
                  className="bg-lilac text-primary-dark p-8 rounded-2xl shadow-card flex flex-col items-center gap-3 text-center"
                >
                  {/* um título só: o leitor de tela lê "4 aulas por mês" junto */}
                  <h3 className="flex flex-col items-center font-display font-semibols">
                    <span className="text-6xl font-bold leading-none">
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
                    className="mt-3"
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
          <p className="mt-10 flex items-center justify-center gp-2 text-lg text-hoverbtn text-center">
            <MapPin aria-hidden="true" className="shrink-0" />
            Os valores variam conforme a região. Peça o seu orçamento pelo
            WhatsApp.
          </p>
        </div>
      </section>

      {/* conteúdo antigo: a galeria sai na 13-5 */}
      <div className="p-6">
        <div className="mt-8">
          <ResponsiveGallery images={images} />
        </div>
      </div>
    </>
  );
};

export default Pacotes;
