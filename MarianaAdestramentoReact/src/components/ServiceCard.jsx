// Card de um serviço: título + descrição.
// O desenho fica aqui; os textos e o ícone  vêm de src/data/servicos.js

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  as = "h3", // nivel do título, quem usa escolhe
  className = "",
}) => {
  const Tag = as;

  return (
    // article: um bloco que faz sentido sozinho (como um card de serviço)
    <article
      className={`bg-lilac text-primary-dark p-6 rounded-2xl shadow-card flex flex-col gap-3 ${className}`}
    >
      {/* && : sem ícone, o quadrado laranja nem aparece */}
      {Icon && (
        <div className="size-12 rounded-xl bg-highlight flex items-center justify-center">
          {/* sem classe de cor: o ícone usa a cor do texto (ink), que vem do article */}
          <Icon size={24} aria-hidden="true" />
        </div>
      )}
      <Tag className="font-display text-xl font-semibold">{title}</Tag>
      <p className="leading-relaxed">{description}</p>
    </article>
  );
};

export default ServiceCard;
