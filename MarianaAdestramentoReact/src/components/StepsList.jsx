// Lista de passos numerados (ex.: "Como funciona").
// Recebe os passos dos dados, cada um com { titulo, descricao }.
// O número não vem dos dados: é calculado pela posição na lista.

const StepsList = ({
  steps,
  // colunas a partir de sm: quem usa escolhe, conforme o número de passos
  className = "sm:grid-cols-2 lg:grid-cols-4",
}) => {
  return (
    // ol: os passos têm ordem (o leitor de tela anuncia "1 de 4")
    <ol className={`grid grid-cols-1 gap-6 ${className}`}>
      {steps.map((step, index) => (
        <li
          key={step.titulo}
          className="flex flex-col items-center text-center gap-3"
        >
          {/* aria-hidden: o ol já anuncia a posição; sem ele, o número seria lido duas vezes */}
          <span
            aria-hidden="true"
            className="size-12 rounded-full bg-highlight text-ink font-display text-2xl font-bold flex items-center justify-center"
          >
            {index + 1}
          </span>
          {/* h3: a lista sempre vem abaixo de um título de seção (h2) */}
          <h3 className="font-display text-xl font-semibold text-white">
            {step.titulo}
          </h3>
          <p className="max-w-xs leading-relaxed text-white">
            {step.descricao}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default StepsList;
