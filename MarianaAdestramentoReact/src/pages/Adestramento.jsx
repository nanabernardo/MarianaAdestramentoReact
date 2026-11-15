import Cindy from "../assets/Eu_Cindy.JPG";
import Goldens from "../assets/Goldens.jpg";
import Tequila from "../assets/Tequila.jpg";
import SRDBranca from "../assets/srd_branca2.jpg";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../components/Button";
import ResponsiveImage from "../components/ResponsiveImage";
import ServiceCard from "../components/ServiceCard";
import SectionHeader from "../components/SectionHeader";
import { gruposAdestramento } from "../data/servicos";
import CTASection from "../components/CTASection";
import { links } from "../data/contato";
import { passosAdestramento } from "../data/passos";
import { diferenciais } from "../data/diferenciais";
import PageHero from "../components/PageHero";

const Adestramento = () => {
  const images = [
    { src: Goldens, alt: "Dois golden retrievers" },
    { src: Tequila, alt: "Tequila, border collie" },
    { src: SRDBranca, alt: "Cadela sem raça definida de pelo branco" },
  ];
  return (
    <>
      {/* abertura: o desenho está no PageHero; aqui ficam só o conteúdo e os botões */}
      <PageHero
        eyebrow="Adestramento com reforço positivo"
        title="Um cão mais calmo, uma rotina mais leve"
        text="Oferecemos atendimento personalizado, com utilização de
              reforçadores positivos para que seu melhor amigo tenha também uma
              experiência divertida e estimulante."
        image={Cindy}
        imageAlt="Mariana abraçada com a Cindy, cadela de pelo cinza malhado"
        ImageClassName="object-[center+40%]"
      >
        <Button to="/contato">Agendar avaliação</Button>
        <Button href={links.whatsapp} variant="outline">
          <FaWhatsapp aria-hidden="true" />
          Chamar no WhatsApp
        </Button>
      </PageHero>

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

      {/* =======Como funciona======= */}
      {/* faixa escura de ponta a ponta, como a dos diferenciais */}
      <section className="bg-primary-dark px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* h2 (padrão): fica abaixo do h1 da abertura */}
          <SectionHeader title="Como funciona" className="mb-10" />

          {/* ol: os passos têm ordem */}
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* index: a posição do item da lista, começando com 0 */}
            {passosAdestramento.map((passo, index) => (
              <li
                key={passo.titulo}
                className="flex flex-col items-center text-center gap-3"
              >
                {/* aria-hidden: o leitor de tela já lê "1 de 4" por causa do ol;
                sem ele, o númro seria lido duas vezes */}
                <span
                  aria-hidden="true"
                  className="size-12 rounded-full bg-highlight text-ink font-display text-2xl font-bold flex items-center justify-center"
                >
                  {index + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-white">
                  {passo.titulo}
                </h3>
                <p className="max-w-xs leading-relaxed text-white text-center">
                  {passo.descricao}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* =======Alguns alunos + chamada final======= */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Alguns alunos" className="mb-10" />

          {/* celular: 1 coluna estreita (max-w-xs), para a foto em pé não ocupar a tela toda.
              a partir de sm: 3 colunas, e o limite sai (sm:max-w-none) */}
          <div className="max-w-xs mx-auto sm:max-w-none grid grid-cols-1 sm:grid-cols-3 gap-6">
            {images.map((image) => (
              <ResponsiveImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                aspect="3/4"
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

export default Adestramento;
