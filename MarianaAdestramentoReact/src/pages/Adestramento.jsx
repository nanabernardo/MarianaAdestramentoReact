import React from "react";

const Adestramento = () => {
  return (
    <section className="bg-primary min-h-screen p-6">
      <h2 className="text-4xl font-bold text-highlight mb-6 text-center">
        Adestramento
      </h2>
      <p className="text-white mb-6 text-center max-w-2xl mx-auto">
        Oferecemos atendimento personalizado, com muita utilização de
        reforçadores positivos para que seu melhor amigo tenha também uma
        experiência divertida e estimulante.{" "}
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2">Obediência básica</h3>
          <p className="text-white text-sm">
            Ensinar comandos básicos de forma divertida.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2 ">
            Adestramendo sanitário
          </h3>
          <p className="text-white text-sm">
            Ensinando seu melhor amigo a fazer as necessidades no lugar certo,
            sem punições ou dor de cabeça.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg w-64  transition text-center">
          <h3 className="font-semibold text-white mb-2 ">
            Correção de agressividade
          </h3>
          <p className="text-white text-sm">
            Atravéns de abordagens personalizadas, identificar o motivo da
            agressividade e resolver o problema de forma consistente e
            duradoura.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Adestramento;
