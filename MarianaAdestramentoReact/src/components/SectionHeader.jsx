// título padrão das seções: título laranja + subtítulo opcional

const SectionHeader = ({
  title,
  subtitle, //opcional, sem ele, só o título aparece
  as = "h2", //qual tag usar; h2 é o mais comum (uma página tem um h1 só)
  className = "mb-6", // espaço abaixo; quem usa pode trocar
}) => {
  const Tag = as;

  return (
    <div className={`text-center ${className}`}>
      <Tag className="font-display text-4xl font-semibold text-highlight">
        {title}
      </Tag>
      {/* && : só desenha o parágrafo se existir subtítulo (como o isOpen && da Navbar) */}
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-xl text-white">{subtitle}</p>
      )}
    </div>
  );
};
export default SectionHeader;
