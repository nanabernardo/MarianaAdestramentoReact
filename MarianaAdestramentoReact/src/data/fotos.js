// Cada foto tem duas versões (veja scripts/otimizar-fotos.js):
// src = pequena (600 px), para a grade e o carrossel
// srcLarge = grande (1600 px), para o lightbox
import GoldensPequena from "../assets/Goldens-pequena.webp";
import Goldens from "../assets/Goldens.webp";
import TequilaPequena from "../assets/Tequila-pequena.webp";
import Tequila from "../assets/Tequila.webp";
import SRDBrancaPequena from "../assets/srd_branca2-pequena.webp";
import SRDBranca from "../assets/srd_branca2.webp";
import BelaPpPequena from "../assets/Bela_Pp-pequena.webp";
import BelaPp from "../assets/Bela_Pp.webp";
import MayaPequena from "../assets/Maya-pequena.webp";
import Maya from "../assets/Maya.webp";

export const fotosAdestramento = [
  { src: GoldensPequena, srcLarge: Goldens, alt: "Dois golden retrievers" },
  { src: TequilaPequena, srcLarge: Tequila, alt: "Tequila, border collie" },
  {
    src: SRDBrancaPequena,
    srcLarge: SRDBranca,
    alt: "Cadela sem raça definida de pelo branco",
  },
  {
    src: MayaPequena,
    srcLarge: Maya,
    alt: "Bull terrier branca sentada longe num gramado",
  },
  {
    src: BelaPpPequena,
    srcLarge: BelaPp,
    alt: "Duas cadelas sem raça definida, uma porte grande deitada e a outra porte pequeno sentada, num gramado",
  },
];
