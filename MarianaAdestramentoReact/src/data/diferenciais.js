import { CalendarDays, Award, Heart } from "lucide-react";

// Diferenciais da Mariana. Aparecem na faixa da Adestramento
// e, na etapa 18b, também na Home.
// "icone" guarda o PRÓPRIO componente do ícone, sem < />:
// aqui só dizemos QUAL ícone; quem usa a lista decide onde e como desenhar.
export const diferenciais = [
    {texto: "Adestrando desde 2014", icone: CalendarDays},
    {texto: "Bióloga pela Unicamp", icone: Award},
    {texto: "Uso de reforço positivo", icone: Heart},
]