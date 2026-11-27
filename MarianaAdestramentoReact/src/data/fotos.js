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
import PpPequena from "../assets/Pp-pequena.webp";
import Pp from "../assets/Pp.webp";
import DoraBelaParquePequena from "../assets/Dora_Bela_parque-pequena.webp";
import DoraBelaParque from "../assets/Dora_Bela_parque.webp";
import DoraBelaPpPequena from "../assets/Dora_Bela_Pp-pequena.webp";
import DoraBelaPp from "../assets/Dora_Bela_Pp.webp";
import DoraBelaDeitadasPequena from "../assets/Dora_Bela_deitadas-pequena.webp";
import DoraBelaDeitadas from "../assets/Dora_Bela_deitadas.webp";
import EuDoraBelaPequena from "../assets/eu_Dora_Bela-pequena.webp";
import EuDoraBela from "../assets/eu_Dora_Bela.webp";
import LanduPiafPequena from "../assets/Landu_Piaf-pequena.webp";
import LanduPiaf from "../assets/Landu_Piaf.webp";
import AmoraPequena from "../assets/Amora-pequena.webp";
import Amora from "../assets/Amora.webp";
import LukePequena from "../assets/Luke_parque-pequena.webp";
import Luke from "../assets/Luke_parque.webp";
import WendyPequena from "../assets/Wendy-pequena.webp";
import Wendy from "../assets/Wendy.webp";
import JackBebePequena from "../assets/Jack_bebe-pequena.webp";
import JackBebe from "../assets/Jack_bebe.webp";
import BartoPequena from "../assets/Barto-pequena.webp";
import Barto from "../assets/Barto.webp";

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

export const fotosSocializacao = [
  {
    src: PpPequena,
    srcLarge: Pp,
    alt: "Cachorrinha pequena, pelo preto, num banco de concreto do parque",
  },
  {
    src: DoraBelaParquePequena,
    srcLarge: DoraBelaParque,
    alt: "Duas cachorras sem raça definida de pelo preto, porte grande, deitadas na grama, com a guia solta",
  },
  {
    src: DoraBelaPpPequena,
    srcLarge: DoraBelaPp,
    alt: "Três cachorras sem raça definida com pelo preto, duas de grande porte e uma de pequeno porte, sentadas na grama, ao lado de flores cor-de-rosa no parque",
  },
  {
    src: DoraBelaDeitadasPequena,
    srcLarge: DoraBelaDeitadas,
    alt: "Duas cachorras de pelo preto deitadas sobre folhas secas, uma delas com manchas caramelo, de língua de fora",
  },
  {
    src: EuDoraBelaPequena,
    srcLarge: EuDoraBela,
    alt: "Mariana sorrindo, abraçada com duas cachorras de pelo preto",
  },
];

export const fotosConsulta = [
  {
    src: LanduPiafPequena,
    srcLarge: LanduPiaf,
    alt: "Dois cães de pelo claro e orelhas caramelo sentados na grama, com guias azul e vermelha",
  },
  {
    src: AmoraPequena,
    srcLarge: Amora,
    alt: "Pastor alemão sentado na grama, olhando para cima com a língua de fora",
  },
  {
    src: LukePequena,
    srcLarge: Luke,
    alt: "Filhote de golden retriever sentado na terra, com guia vermelha, olhando para cima",
  },
];

export const fotosPacotes = [
  {
    src: WendyPequena,
    srcLarge: Wendy,
    alt: "Border collie merle deitado na grama, com guia vermelha",
  },
  {
    src: JackBebePequena,
    srcLarge: JackBebe,
    alt: "Filhote de pelo branco e caramelo sentado num tapete listrado, olhando para cima",
  },
  {
    src: BartoPequena,
    srcLarge: Barto,
    alt: "Cão de pelo cinza sentado, sorrindo, com guia rosa",
  },
];
