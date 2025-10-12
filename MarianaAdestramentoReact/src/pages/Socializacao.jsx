import React from "react";
import Pp from "../assets/Pp.jpg";
import DoraBelaParque from "../assets/Dora_Bela_parque.jpg";
import Matilha from "../assets/matilha_parque.jpg";
import DoraBelaPp from "../assets/Dora_Bela_Pp.jpg";
import ResponsiveGallery from "../components/ResponsiveGallery";

const Socializacao = () => {
  const images = [
    { src: Pp, alt: "Pp" },
    { src: Matilha, alt: "Matilha" },
    { src: DoraBelaParque, alt: "Dora e Bela" },
    { src: DoraBelaPp, alt: "Dora Bela Pp" },
  ];
  return (
    <section className="p-6 text-center text-white">
      <h1 className="text-4xl font-bold text-highlight mb-4">Socialização</h1>
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
  );
};

export default Socializacao;
