import React from "react";
import { X } from "lucide-react";
import { useState } from "react";

const ResponsiveImage = ({ src, alt, aspect = "16/9", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Imagem na página  */}
      <div
        className={`${className} overflow-hidden cursor-pointer`}
        style={{ aspectRatio: aspect }}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover block transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex intems-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* conteúdo Modal */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* botão fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2 hover:bg-black transition"
              aria-label="Fechar Imagem"
            >
              <X size={20} />
            </button>

            {/*  Imagem Ampliada */}
            <img
              src={src}
              alt={alt}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveImage;
