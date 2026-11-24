import { useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// O Lightbox continua sem estado: recebe a foto, a posição (index) e o total,
// e avisa o pai quando a pessoa quer fechar (onClose), voltar (onPrev) ou avançar (onNext).
const Lightbox = ({ photo, index, total, onPrev, onNext, onClose }) => {
  // classes que os 3 botões redondos têm em comum, num lugar só.
  // Cada classe está completa aqui; só juntamos com as de posição de cada botão.
  const roundButton =
    "absolute rounded-full bg-black/80 p-2 text-white hover:bg-black focus-visible:outline-4 focus-visible:outline-highlight";

  // gaveta para guardar onde o dedo encostou (não aparece na tela, por isso useRef e não useState)
  const touchStartX = useRef(null);

  // distância mínima, em pixels, para contar como arrastar (abaixo disso é só um toque)
  const SWIPE_MIN = 50;

  // dedo encostou: guarda a posição horizontal (x) do primeiro dedo
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // dedo saiu: compara com o começo e decide o lado
  const handleTouchEnd = (e) => {
    //sem começo guardado, ou com uma foto só, não há o que fazer
    if (touchStartX.current === null || total < 2) return;

    // changedTouches: o dedo que acabou de sair (touches já está vazio aqui)
    const distance = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null; // esvazia a gaveta para o próximo toque

    if (distance < -SWIPE_MIN) {
      onNext(); // arrastou para a esquerda
    } else if (distance > SWIPE_MIN) {
      onPrev(); // arrastou para a direita
    }
  };

  return (
    // fundo escuro: clicar nele fecha
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Foto ampliada"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* conteúdo: o stopPropagation impede que o clique na foto "suba" até o fundo e feche */}
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar foto ampliada"
          className={`${roundButton} top-3 right-3`}
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* contador só faz sentido com mais de uma foto. aria-live: o leitor de tela lê o contador sempre que ele muda */}
        {total > 1 && (
          <p
            aria-live="polite"
            className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-sm text-white"
          >
            {index + 1} de {total}
          </p>
        )}

        {/* aqui o alt descreve a foto, porque ela é só imagem (não é botão) */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-[90vw] md:max-w-[calc(100vw_-_10rem)] max-h-[90vh] rounded-lg object-contain shadow-lg"
        />
      </div>

      {/* setas fora da foto, presas nas bordas da tela; cada uma tem o próprio stopPropagation, senão o clique sobe até o fundo e fecha */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Foto anterior"
            className={`${roundButton} left-2 md:left-6 top-1/2 -translate-y-1/2 max-md:sr-only`}
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Próxima foto"
            className={`${roundButton} right-2 md:right-6 top-1/2 -translate-y-1/2 max-md:sr-only`}
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  );
};

export default Lightbox;
