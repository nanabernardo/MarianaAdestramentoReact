import { useState } from "react";
import Lightbox from "./Lightbox";

// photos: lista de { src, alt }
// aspect: formato das miniaturas (padrão quadrado; a Adestramento usa 3/4)
// className: layout da grade (o padrão é o que as 4 páginas já usam hoje)

const PhotoGallery = ({
  photos,
  aspect = "1/1",
  className = "max-w-xs mx-auto sm:max-w-none grid grid-cols-1 sm:grid-cols-3 gap-6",
}) => {
  // UM estado para a galeria inteira:
  // null = fechado; 0, 1, 2… = posição da foto aberta na lista
  const [openIndex, setOpenIndex] = useState(null);


  return (
    <>
      {/* ul/li: é uma lista de fotos, sem ordem */}
      <ul className={className}>
        {photos.map((photo, index) => (
          <li key={photo.src}>
            {/* o botão é a área clicável; a foto é o conteúdo dele.
                aria-label = nome do botão (a ação + o que tem na foto) */}
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar foto: ${photo.alt}`}
              className="group block w-full cursor-zoom-in overflow-hidden rounded-2xl shadow-card focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-highlight"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{ aspectRatio: aspect }}
                className="block h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* !== null, e não só openIndex && … (veja o exercício 1) */}
      {openIndex !== null && (
        <Lightbox
          photo={photos[openIndex]}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
};
export default PhotoGallery;
