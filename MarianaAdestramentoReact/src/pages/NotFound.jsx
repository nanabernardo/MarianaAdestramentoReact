import Button from "../components/Button";

const NotFound = () => {
  return (
    <section className="px-6 py-20 flex flex-col items-center gap-6 text-center text-white">
      {/* aria-hidden: o número é enfeite; o h1 abaixo já diz o que aconteceu */}
      <p
        className="font-display text-8xl font-semibold text-highlight"
        aria-hidden="true"
      >
        404
      </p>

      <h1 className="font-display text-4xl font-semibold">
        Página não encontrada
      </h1>

      <p className="max-w-xl text-xl">
        Esse caminho não leva a lugar nenhum. Até os melhores farejadores se
        perdem às vezes!
      </p>

      {/*  Button com "to" vira um Link do React Router  */}
      <div className="flex flex-col gap-6 md:flex-row">
        <Button to="/">Voltar para a Home</Button>
        <Button to="/contato" variant="outline">Fale comigo</Button>
      </div>
    </section>
  );
};

export default NotFound;
