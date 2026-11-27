import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// photos: lista de { src, srcLarge, alt } (vem de src/data/fotos.js)
// aspect: formato das fotos (padrão 3/4, em pé)
const PhotoCarousel = ({ photos, aspect = "3/4" }) => {
  // "gancho" para a faixa: é ela que vamos mandar rolar
  const trackRef = useRef(null);

  // direction: -1 = voltar, 1 = avançar
  const scrollPage = (direction) => {
    const track = trackRef.current;

    // o primeiro <li>: todas as fotos têm a mesma largura, então ele serve de medida
    const firstPhoto = track.firstElementChild;

    // o gap-6 em pixels, lido do CSS (assim, se o gap mudar no className, a conta acompanha)
    const gap = parseFloat(getComputedStyle(track).columnGap);

    // anda uma foto + o espaço até a próxima
    track.scrollBy({
      left: direction * (firstPhoto.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  // mesmo visual da variante outline do Button
  const arrowButton =
    "rounded-full border-2 border-highlight p-2 text-white hover:bg-highlight hover:text-ink focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-highlight";
  return (
    // celular: fotos em cima, as 2 setas embaixo, no meio.
    // a partir de sm: 3 colunas (seta | fotos | seta).
    // minmax(0,1fr): sem isso, a coluna do meio cresce até caber todas as fotos e nada rola
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center">
      <ul
        ref={trackRef}
        className="col-span-2 min-w-0 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:col-span-1 sm:col-start-2 sm:row-start-1"
      >
        {photos.map((photo) => (
          // shrink-0: a foto não encolhe para caber (é isso que faz sobrar para rolar)
          // basis: 80% no celular (a próxima aparece pela metade),
          // 2 por vez a partir de sm e 3 a partir de lg (descontando os espaços do gap)
          <li
            key={photo.src}
            className="shrink-0 snap-start basis-[80%] sm:basis-[calc((100%_-_1.5rem)/2)] lg:basis-[calc((100%_-_3rem)/3)]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              style={{ aspectRatio: aspect }}
              className="block w-full rounded-2xl object-cover shadow-card"
            />
          </li>
        ))}
      </ul>

      {/* justify-self: no celular, uma seta encosta na outra no meio da linha */}
      <button
        type="button"
        onClick={() => scrollPage(-1)}
        aria-label="Fotos anteriores"
        className={`${arrowButton} justify-self-end sm:col-start-1 sm:row-start-1`}
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => scrollPage(1)}
        aria-label="Próximas fotos"
        className={`${arrowButton} justify-self-start sm:col-start-3 sm:row-start-1`}
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>
    </div>
  );
};

export default PhotoCarousel;
