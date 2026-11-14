import {
  Star,
  Droplet,
  Package,
  House,
  Shield,
  Smile,
  Clock,
  Route,
} from "lucide-react";

// Serviços de adestramento, separados em grupos.
// Cada grupo tem título, subtítulo e a sua lista de serviços.
// Para mudar um texto ou acrescentar um serviço, mexa só aqui.
// "icone" guarda o componente do ícone, sem < /> (como em diferenciais.js).

export const gruposAdestramento = [
  {
    titulo: "Educação do dia a dia",
    subtitulo:
      "Para filhotes e para cães adultos que não apresentam muitos problemas ou estão chegando na família agora.",
    servicos: [
      {
        titulo: "Obediência básica",
        icone: Star,
        descricao:
          'Condicionamento dos comandos básicos: "senta", "deita", "fica", "vem", "junto", e "não".',
      },
      {
        titulo: "Adestramento sanitário",
        icone: Droplet,
        descricao:
          "Ensinando seu melhor amigo a fazer as necessidades no lugar certo, sem punições ou dor de cabeça.",
      },
      {
        titulo: "Caixa de transporte",
        icone: Package,
        descricao:
          "Essencial para a segurança em viagens de carro e avião. Seu cão viaja e descansa sem estresse e com a máxima proteção.",
      },
      {
        titulo: "Bons hábitos em casa",
        icone: House,
        descricao:
          "Estabelecer limites claros e consistentes, ensinando seu cão a ter bom comportamento e respeitar as regras da família.",
      },
    ],
  },
  {
    titulo: "Problemas de comportamento",
    subtitulo:
      "Para quando a convivência ficou difícil e você não sabe por onde começar.",
    servicos: [
      {
        titulo: "Correção de agressividade",
        icone: Shield,
        descricao:
          "Identificação do motivo da agressividade e resolução do problema de forma consistente e duradoura.",
      },
      {
        titulo: "Correção de ansiedade",
        icone: Smile,
        descricao:
          "Construção de confiança e gerenciamento do estresse, transformando a insegurança em tranquilidade e bem-estar.",
      },
      {
        titulo: "Ansiedade de separação",
        icone: Clock,
        descricao:
          "Desenvolver a independência do seu cão para que ele fique calmo e seguro mesmo na sua ausência, sem latidos ou destruição.",
      },
      {
        titulo: "Correção de reatividade",
        icone: Route,
        descricao:
          "Ensinamos seu pet a se manter calmo e focado em você, garantindo passeios tranquilos, prazerosos e divertidos.",
      },
    ],
  },
];
