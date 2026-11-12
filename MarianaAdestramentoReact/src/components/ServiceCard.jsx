// Card de um serviço: título + descrição.
// O desenho fica aqui; os textos vêm de src/data/servicos.js

const ServiceCard = ({
  title,
  description,
  as = "h3", // nivel do título, quem usa escolhe
  className = "w-full max-w-xs",
}) => {
  const Tag = as;

  return (
    <div
      className={`bg-secondary p-6 rounded-lg shadow-card text-center ${className}`}
    >
      <Tag className="font-semibold text-white mb-2">{title}</Tag>
      <p className="text-white text-sm text-justify">{description}</p>
    </div>
  );
};

export default ServiceCard;
