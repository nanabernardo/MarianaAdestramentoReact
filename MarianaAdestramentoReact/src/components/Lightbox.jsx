import { useEffect, useRef } from "react";
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

  // "gancho" para o botão X: o React coloca o botão depois de desenhar
  const closeButtonRef = useRef(null);

  // "gancho" para a caixa do lightbox: é nela que procuramos os botões
  const dialogRef = useRef(null);

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

  // teclado: Esc fecha, <- volta, -> avança
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && total > 1) {
        onPrev();
      } else if (e.key === "ArrowRight" && total > 1) {
        onNext();
      }
    };

    // no documento, e não no div: o teclado só "fala" com quem está em foco
    document.addEventListener("keydown", handleKeyDown);

    // limpeza: roda antes do efeito rodar de novo e quando o Lightbox sai da tela
    return () => document.removeEventListener("keydown", handleKeyDown);

    // as funções vêm do pai: quando ele cria funções novas, o efeito liga o ouvinte de novo, com elas
  }, [onClose, onPrev, onNext, total]);

  // foco: ao abrir, vai para o X; ao fechar, volta para quem abriu
  useEffect(() => {
    //quem estava com o foco antes de abrir: a miniatura clicada
    const previous = document.activeElement;

    // leva o foco para dentro do lightbox
    closeButtonRef.current.focus();

    // limpeza: roda quando o Lightbox sai da tela (ao fechar)
    return () => previous?.focus();

    // [] de propósito: só ao abrir e ao fechar, não a cada troca de foto
  }, []);

  // página de trás parada enquanto o lightbox está aberto
  useEffect(() => {
    const { body } = document;

    // guarda como estava, para devolver igual ao fechar
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;

    // largura da barra de rolagem = janela inteira - área sem barra
    // (no celular costuma dar 0, porque a barra fica por cima do conteúdo)
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // trava a rolagem; o espaço no lugar da barra evita o "pulo" para a direita
    body.style.overflow = "hidden";
    body.style.paddingRight = `${scrollbarWidth}px`;

    // limpeza: ao fechar, devolve os valores anteriores
    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, []);

  // foco preso: o Tab dá a volta dentro do lightbox
  useEffect(() => {
    const handleTab = (e) => {
      if (e.key !== "Tab") return; // só nos interessa o Tab

      // os botões do lightbox, na ordem em que aparecem no código: X, anterior, próxima
      const buttons = dialogRef.current.querySelectorAll("button");
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      const current = document.activeElement;

      if (!dialogRef.current.contains(current)) {
        e.preventDefault(); // o foco escapou (clique no fundo): traz de volta
        first.focus();
      } else if (e.shiftKey && current === first) {
        e.preventDefault(); // Shift+Tab no primeiro: vai para o último
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault(); // Tab no último: volta para o primeiro
        first.focus();
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => {
      document.removeEventListener("keydown", handleTab);
    };
    // [] de propósito: o efeito só usa ref, que é sempre a mesma
  }, []);
  
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
      ref={dialogRef}
    >
      {/* conteúdo: o stopPropagation impede que o clique na foto "suba" até o fundo e feche */}
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeButtonRef}
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
          src={photo.srcLarge}
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
