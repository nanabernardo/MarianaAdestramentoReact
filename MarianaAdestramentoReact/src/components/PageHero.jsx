// Abertura das páginas: texto à esquerda, foto à direita (no celular, foto embaixo).
// O desenho fica aqui; textos, foto e botões vêm de quem usa.

const PageHero = ({
  eyebrow, // texto pequeno acima do título
  title,
  text,
  image,
  imageAlt,
  imageClassName = "object-center", // qual parte da foto aparece no recorte
  children, // os botões: tudo que vier entre <PageHero e </PageHero/>
}) => {
  return (
    <section className="px-6 pt-12 pb-16 lg:pt-20">
      {/* no celular, texto em cima e foto embaixo; a partir de md, lado a lado */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-10 lg:gap-16">
        {/* coluna do texto: flex-1 ocupa todo o espaço que a foto não usar */}
        <div className="flex-1 flex flex-col gap-5">
          {eyebrow && (
            <p className="text-sm font-bold uppercase tracking-wider text-hoverbtn">
              {eyebrow}
            </p>
          )}
          {/* sempre h1: a abertura é o título da página (um por página) */}
          <h1 className="font-display text-4xl lg:text-5xl font-semibold leading-tight text-white">
            {title}
          </h1>
          <p className="max-w-xl text-lg lg:text-xl text-white">{text}</p>

          {/* sem botões, a div nem aparece (não sobra espaço vazio) */}
          {children && (
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              {children}
            </div>
          )}
        </div>

        {/* coluna da foto: no celular, até max-w-sm e centralizada; no computador, 1/3 */}
        <div className="w-full max-w-sm mx-auto md:w-1/3 md:max-w-md">
          <img
            src={image}
            alt={imageAlt}
            className={`w-full aspect-4/5 object-cover rounded-3xl shadow-card ${imageClassName}`}
          />
        </div>
      </div>
    </section>
  );
};
export default PageHero;
