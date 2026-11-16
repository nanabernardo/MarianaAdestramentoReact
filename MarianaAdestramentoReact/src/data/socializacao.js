import {
  Shield,
  Activity,
  Zap,
  MapPin,
  Volume2,
  Users2,
  PawPrint,
} from "lucide-react";

// Textos da página Socialização.
// "icone" guarda o componente do ícone, sem < /> (como em servicos.js).
// Para mudar um texto, mexa só aqui.

export const sinaisSocializacao = [
  {
    titulo: "Medo",
    icone: Shield,
    descricao:
      "Foge, treme ou se esconde diante de pessoas, sons ou lugares novos?",
  },
  {
    titulo: "Ansiedade",
    icone: Activity,
    descricao: "Fica agitado e não consegue relaxar fora de casa.",
  },
  {
    titulo: "Reatividade",
    icone: Zap,
    descricao: "Late, avança ou puxa a guia quando vê outros cães ou pessoas.",
  },
];

export const areasSocializacao = [
  { texto: "Novos ambientes", icone: MapPin },
  { texto: "Sons", icone: Volume2 },
  { texto: "Pessoas", icone: Users2 },
  { texto: "Outros animais", icone: PawPrint },
];

export const mudancasSocializacao = [
  "Mais segurança em qualquer situação",
  "Um laço de confiança mais forte entre vocês",
  "Passeios e encontros tranquilos",
];
