import React from "react";

const Pacotes = () => {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-highlight mb-6 text-center">
        Pacotes
      </h2>
      <h3 className="text-2xl">
        Você pode escolher quantas aulas fazer e por quanto tempo!
      </h3>

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
    </div>
  );
};

export default Pacotes;
