import React from "react";
import Wendy from "../assets/Wendy.jpg";
import Maya from "../assets/Maya.jpeg";
import Barto from "../assets/Barto.jpg";
import ResponsiveGallery from "../components/ResponsiveGallery";

const Pacotes = () => {
  const images = [
    { src: Wendy, alt: "Wendy" },
    { src: Maya, alt: "Maya" },
    { src: Barto, alt: "Barto" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-highlight mb-6 text-center">
        Pacotes
      </h2>
      <h3 className="text-2xl font-semibold text-white text-center pb-2">
        Você pode escolher quantas aulas fazer e por quanto tempo!
      </h3>
      <p className="text-white text-center pb-2">Escolha a frequência e depois por quantos meses (tem desconto quanto mais meses forem contratados)</p>

      <div>
        <table className="text-white border border-secondary border-collapse w-full max-w-[720px] mx-auto">
          <caption className="font-semibold text-lg md-2 mb-2"></caption>
          <thead>
            <tr className="bg-secondary text-center">
              <th scope="col" className="p-2">
                Quantidade de aulas por mês
              </th>
              <th scope="col" className="p-2">
                Aulas na semana
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary">
            <tr className="text-center">
              <td className="p-2 border border-secondary">4 aulas</td>
              <td className="p-2 border border-secondary">1 aula</td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">8 aulas</td>
              <td className="p-2 border border-secondary">2 aulas</td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">12 aulas</td>
              <td className="p-2 border border-secondary">3 aulas</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <ResponsiveGallery images={images} />
      </div>
    </div>
  );
};

export default Pacotes;
