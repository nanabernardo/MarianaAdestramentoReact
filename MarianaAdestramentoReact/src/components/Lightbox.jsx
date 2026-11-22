import { X } from "lucide-react";

// O Lightbox não sabe quantas fotos existem nem guarda estado:
// ele desenha a foto que recebe e avisa o pai (onClose) quando a pessoa quer fechar.
const Lightbox = ({ photo, onClose }) => {
  return (
    // fundo escuro: clicas nele fecha
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Foto ampliada"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      {/* conteúdo: o stopPropagation impede que o clique na foto "suba" até o fundo e feche */}
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar foto ampliada"
          className="absolute top-3 right-3 rounded-full bg-black/60 p-2 text-white hover:bg-black"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* aqui o alt descreve a foto, porque ela é só imagem (não é botão) */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-[90vw] max-h-[90vh] rounded-lg object-contain shadow-lg"
        />
      </div>
    </div>
  );
};

export default Lightbox;
