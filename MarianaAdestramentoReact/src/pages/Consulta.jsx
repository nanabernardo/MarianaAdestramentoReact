import React from "react";
import LanduPiaf from "../assets/Landu_Piaf.jpg";
import Schnauzer from "../assets/Schnauzer.jpg";
import ResponsiveImage from "../components/ResponsiveImage";

const Consulta = () => {
  return (
    <section className="p-6 text-center text-white">
      <h1 className="text-4xl font-bold text-highlight mb-4">
        Consulta Comportamental
      </h1>
      <p className="text-white mb-6 text-center max-w-2xl mx-auto text-xl">
        A consulta comportamental é feita através avaliação do comportamento de
        um animal com o objetivo de identificar e corrigir comportamentos
        problemáticos. De forma personalizada e voltada para a demanda que o
        cliente traz, conversamos sobre os objetivos do trabalho, as
        expectativas do cliente.
      </p>
      <p className="text-white mb-6 text-center max-w-2xl mx-auto text-xl">
        São duas visitas, com um intervalo ideal de 15 dias. Nesse período,
        mantemos contato por whatsapp para sanar qualquer nova dúvida e melhor
        orientar no processo de trabalho comportamental do seu melhor amigo.
      </p>

      <div className="flex justify-center gap-8 items-center ">
        <div className="hidden md:block ">
          <ResponsiveImage
            src={LanduPiaf}
            alt="Landu e Piaf"
            aspect="1/1"
            className="rounded-xl shadow-md w-70"
          />
        </div>
        <div className="hidden md:block ">
          <ResponsiveImage
            src={Schnauzer}
            alt="Schnauzer"
            aspect="1/1"
            className="rounded-xl shadow-md w-70"
          />
        </div>
      </div>

      {/* Imagens mobile (coluna) */}
      <div className="flex flex-col items-center gap-4 mt-6 md:hidden">
        <ResponsiveImage
          src={LanduPiaf}
          alt="Landu e Piaf"
          aspect="1/1"
          className="rounded-xl shadow-md w-70"
        />
        <ResponsiveImage
          src={Schnauzer}
          alt="Schnauzer"
          aspect="1/1"
          className="rounded-xl shadow-md w-70"
        />
      </div>
    </section>
  );
};

export default Consulta;
