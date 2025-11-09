import React from "react";
import Cindy from "../assets/Eu_Cindy.JPG";
import Goldens from "../assets/Goldens.jpg";
import Tequila from "../assets/Tequila.jpg";
import SRDBranca from "../assets/srd_branca2.jpg";
import ResponsiveGallery from "../components/ResponsiveGallery";

const Adestramento = () => {
  const images = [
    { src: Cindy, alt: "Cindy" },
    { src: Goldens, alt: "Goldens" },
    { src: Tequila, alt: "Tequila" },
    { src: SRDBranca, alt: "SRD Branca" },
  ];
  return (
    <section className="bg-primary min-h-screen p-6">
      <h2 className="text-4xl font-bold text-highlight mb-6 text-center">
        Adestramento
      </h2>
      <p className="text-white mb-6 text-justify max-w-2xl mx-auto text-xl">
        Oferecemos atendimento personalizado, com utilização de reforçadores
        positivos para que seu melhor amigo tenha também uma experiência
        divertida e estimulante.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center  gap-6 max-w-6xl mx-auto">
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2">Obediência básica</h3>
          <p className="text-white text-sm text-justify">
            Condicionamento dos comandos básicos: "senta", "deita", "fica",
            "vem", "junto" e "não" de forma divertida.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2 ">
            Adestramendo sanitário
          </h3>
          <p className="text-white text-sm text-justify ">
            Ensinando seu melhor amigo a fazer as necessidades no lugar certo,
            sem punições ou dor de cabeça.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2 ">
            Correção de agressividade
          </h3>
          <p className="text-white text-sm text-justify text-align-justify">
            Identificação do motivo da agressividade e resolução do problema de
            forma consistente e duradoura.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2 ">
            Correção de Ansiedade
          </h3>
          <p className="text-white text-sm text-justify ">
            Construição de confiança e gerenciamento do estresse, transformando
            a insegurança em tranquilidade e bem-estar.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2 ">
            Ansiedade de Separação
          </h3>
          <p className="text-white text-sm text-justify ">
            Desenvolver a independência do seu cão para que ele fique calmo e
            seguro mesmo na sua ausência, sem latidos ou distruição.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2 ">
            Caixa de Transporte
          </h3>
          <p className="text-white text-sm text-justify ">
            Essencial para a segurança em viagens de carro e avião. Seu cão
            viaja e descansa sem estresse e com a máxima proteção.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2 ">
            Correção de Reatividade
          </h3>
          <p className="text-white text-sm text-justify ">
            Ensinamos seu pet a se manter calmo e focado em você, garantindo
            passeios tranquilos, prazerosos e divertidos.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2 ">
            Bons Hábitos em Casa
          </h3>
          <p className="text-white text-sm text-justify ">
            Estabelecer limites claros e consistentes, ensinando seu cão a ter
            bom comportamento e respeitar as regras da família.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <ResponsiveGallery images={images} />
      </div>
    </section>
  );
};

export default Adestramento;
