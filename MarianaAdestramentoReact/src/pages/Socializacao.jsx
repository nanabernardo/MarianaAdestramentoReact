import Pp from "../assets/Pp.jpg";
import DoraBelaParque from "../assets/Dora_Bela_parque.jpg";
import Matilha from "../assets/matilha_parque.jpg";
import DoraBelaPp from "../assets/Dora_Bela_Pp.JPG";
import { FaWhatsapp } from "react-icons/fa";
import ResponsiveGallery from "../components/ResponsiveGallery";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { links } from "../data/contato";

const Socializacao = () => {
  const images = [
    { src: Pp, alt: "Pp" },
    { src: DoraBelaParque, alt: "Dora e Bela" },
    { src: DoraBelaPp, alt: "Dora Bela Pp" },
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
      >
        <Button to="/contato">Agendar uma avaliação</Button>
        <Button href={links.whatsapp} variant="outline">
          <FaWhatsapp aria-hidden="true" />
          Chamar no WhatsApp
        </Button>
      </PageHero>

      {/* conteúdo antigo: sai aos poucos nas partes 12c-2 a 12c-4.
          o h1 antigo já saiu: o h1 da página agora está no PageHero */}
      <section className="p-6 text-center text-white">
        <p className="text-white mb-6 text-center max-w-2xl mx-auto text-xl">
          <b>Medo, ansiedade e reatividade</b> são sinais de que seu cão precisa
          de ajuda para interagir com o mundo. A falta de socialização correta
          pode levar a desconforto profundo e até mesmo a comportamentos
          agressivos.
        </p>
        <p className="text-white mb-6 text-center max-w-2xl mx-auto text-xl">
          A socialização vai muito além de apenas levar para passear ou expor o
          cachorro a estímulos. É um processo guiado e seguro que deve ser
          realizado de forma intencional. Preparo seu cão para lidar com novos
          ambientes, sons, pessoas e outros animais de forma calma e confiante.
        </p>
        <p className="text-white mb-6 text-center max-w-2xl mx-auto text-xl">
          Meu objetivo é transformar a insegurança em bem estar duradouro,
          garantindo que o seu cão se sinta seguro e confortável em qualquer
          situação. Fortaleça o laço de confiança e desfrute de passeios e
          encontros sociais tranquilos!
        </p>

        <ResponsiveGallery images={images} />
      </section>
    </>
  );
};

export default Socializacao;
