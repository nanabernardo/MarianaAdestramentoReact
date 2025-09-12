import React from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import BelaDora from "../assets/Bela_Dora_2011.jpg";
import LukePortao from "../assets/IMG-20230725-WA0006.jpg";

const Home = () => {
  return (
    <section className="min-h-screen relative p-6 text-white">
      {/* grid principal */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] gap-6 items-start">
        {/* imagem esquerda (somente desktop) */}
        <div className="hidden md:block mt-48">
          <ResponsiveImage
            src={BelaDora}
            alt="Bela e Dora"
            aspect="1/1"
            className="rounded-xl shadow-md w-48"
          />
        </div>

        {/* texto principal */}
        <div className="max-w-4xl mx-auto mt-0 text-center">
          <h1 className="text-5xl font-bold text-highlight mb-4">
            Mariana Bernardo Adestramento
          </h1>
          <h2 className="text-2xl mb-6">
            Seu melhor amigo com melhor qualidade de vida
          </h2>
          <p className="text-justify indent-8 p-2">
            Me chamo Mariana, tenho 37 anos. Bióloga formada pela Unicamp
            (2007-2010). Desde criança eu convivo com cães de forma muito
            próxima (cães e gatos na verdade). Em 2010 minha mãe adotou duas
            SRD(famoso "vira-latas"), a Isabela e a Isadora (Bela e Dora. Vocês
            vão ver muitas fotos das duas por aqui). Como seriam duas cachorras
            grandes e fortes e faziam a maior bagunça, eu comecei a estudar
            comportamento canino (pouco adestramento na época). Fui testando o
            que eu ia aprendendo em livros e internet e via que funcionava de
            forma relativamente fácil, porém eu ainda estava tendo muita
            dificuldades na rua. A socialização delas foi bem ruim quando
            filhotes. Na rua elas ficavam muito ansiosas, puxavam, reagiam e eu
            passava nervoso.
          </p>
          <p className="text-justify indent-8 p-2">
            Chamei um adestrador. Quando ele chegou e começou a interagir com
            elas, percebi que ele até podia saber como condicionar os comandos
            de adestramento, mas que ele sabia menos de comportamento canino do
            que eu. Fiquei revoltada e pensei "Como que ele está ganhando
            dinheiro com isso e eu não?"
          </p>
          <p className="text-justify indent-8 p-2">
            Como eu estava muito decepcionada com o que eu estava fazendo na
            época (mestrado) e eu já tinha percebido que eu gostava de biologia,
            mas era apaixonada por cães e que sair de casa todos os dias para
            melhorar a vida de cães e seu relacionamento com seus humanos e o
            mundo, decidi que me tornaria adestradora de cães. E deu certo. Dá
            certo desde 2014.
          </p>
          <p className="text-justify indent-8">
            Desde então aprendi muito mais sobre adestramento e comportamento
            canino (também entendi que nunca se para de aprender). Muitos cães
            passaram por mim (nunca parei para quantificar, mas tenho uma pilha
            de contratos assinados em casa) e tiveram uma melhora na qualidade
            de vida como um todo.
          </p>
        </div>

        {/* Imagem direita (somente desktop) */}
        <div className="hidden md:block mt-48">
          <ResponsiveImage
            src={LukePortao}
            alt="Dora e Bela"
            aspect="1/1"
            className="rounded-xl shadow-md w-48"
          />
        </div>
      </div>
      {/* Imagens mobile (coluna) */}
      <div className="flex flex-col items-center gap-4 mt-6 md:hidden">
        <ResponsiveImage
          src={BelaDora}
          alt="Bela e Dora"
          aspect="1/1"
          className="rounded-xl shadow-md w-48"
        />
        <ResponsiveImage
          src={LukePortao}
          alt="Dora e Bela"
          aspect="1/1"
          className="rounded-xl shadow-md w-48"
        />
      </div>
    </section>
  );
};

export default Home;
