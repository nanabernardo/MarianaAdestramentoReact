import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Componente "invisível": não desenha nada, só role a página para o topo sempre que o endereço muda.
const ScrollToTop = () => {
  //pathname = a parte do endereço depois do domínio
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // (0, 0) = canto de cima à esquerda
  }, [pathname]); // roda de novo toda vez que o endereço muda

  return null; // nada para mostrar na tela
};

export default ScrollToTop;
