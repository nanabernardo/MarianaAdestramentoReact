import Wendy from "../assets/Wendy.jpg";
import Maya from "../assets/Maya.jpeg";
import Barto from "../assets/Barto.jpg";
import EuBlack from "../assets/Eu_Black.jpeg";
import ResponsiveGallery from "../components/ResponsiveGallery";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { links } from "../data/contato";
import { FaWhatsapp } from "react-icons/fa";

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

      {/* conteúdo antigo: a tabela sai na 13-3 e a galeria na 13-5 */}
      <div className="p-6">
        {/* id temporário aqui: na 13-3 ele vai para a seção dos cards */}
        <div id="planos">
          <table className="text-white border border-secondary border-collapse w-full max-w-[720px] mx-auto">
            <thead>
              <tr className="bg-secondary text-center">
                <th scope="col" className="p-2">
                  Quantidade de aulas por mês
                </th>
                <th scope="col" className="p-2">
                  Aulas na semana
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary">
              <tr className="text-center">
                <td className="p-2 border border-secondary">4 aulas</td>
                <td className="p-2 border border-secondary">1 aula</td>
              </tr>
              <tr className="text-center">
                <td className="p-2 border border-secondary">8 aulas</td>
                <td className="p-2 border border-secondary">2 aulas</td>
              </tr>
              <tr className="text-center">
                <td className="p-2 border border-secondary">12 aulas</td>
                <td className="p-2 border border-secondary">3 aulas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <ResponsiveGallery images={images} />
        </div>
      </div>
    </>
  );
};

export default Pacotes;
