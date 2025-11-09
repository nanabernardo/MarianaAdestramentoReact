import React from "react";

const Valores = () => {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-highlight mb-6 text-center">
        Valores
      </h2>
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Regiões Próximas (até 10km)
      </h3>
      <div>
        <table className="text-white border border-secondary border-collapse w-full max-w-[720px] mx-auto">
          <caption className="font-semibold text-lg md-2 mb-2">
            8 aulas por mês (duas aulas por semanas)
          </caption>
          <thead>
            <tr className="bg-secondary text-center">
              <th scope="col" className="p-2">
                Duração
              </th>
              <th scope="col" className="p-2">
                Valor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary">
            <tr className="text-center">
              <td className="p-2 border border-secondary">1 mês</td>
              <td className="p-2 border border-secondary">
                R$ 1200,00 por mês
              </td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">2 meses</td>
              <td className="p-2 border border-secondary">
                R$ 1100,00 por mês
              </td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">3 meses</td>
              <td className="p-2 border border-secondary">
                R$ 1000,00 por mês
              </td>
            </tr>
          </tbody>
        </table>

        <table
          border={1}
          className="text-white border w-full max-w-[720px] mx-auto"
        >
          <caption className="font-semibold text-lg m-2">
            12 aulas por mês (três aulas por semana)
          </caption>
          <thead>
            <tr className="bg-secondary text-center">
              <th scope="col" className="p-2 border border-secondary">
                Duração
              </th>
              <th scope="col" className="p-2 border border-secondary">
                Valor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary">
            <tr className="text-center">
              <td className="p-2 border border-secondary">1 mês</td>
              <td className="p-2 border border-secondary">
                R$ 1550,00 por mês
              </td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">2 meses</td>
              <td className="p-2 border border-secondary">
                R$ 1400,00 por mês
              </td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">3 meses</td>
              <td className="p-2 border border-secondary">
                R$ 1350,00 por mês
              </td>
            </tr>
          </tbody>
        </table>

        <table
          border={1}
          className="text-white border w-full max-w-[720px] mx-auto"
        >
          <caption className="font-semibold text-lg m-2">
            4 aulas por mês (uma aula por semana)
          </caption>
          <thead>
            <tr className="bg-secondary text-center">
              <th scope="col" className="p-2 border border-secondary">
                Duração
              </th>
              <th scope="col" className="p-2 border border-secondary">
                Valor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary">
            <tr className="text-center">
              <td className="p-2 border border-secondary">1 mês</td>
              <td className="p-2 border border-secondary">R$ 700,00 por mês</td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">2 meses</td>
              <td className="p-2 border border-secondary">R$ 670,00 por mês</td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">3 meses</td>
              <td className="p-2 border border-secondary">R$ 650,00 por mês</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Regiões Distantes (mais de 10km)
      </h3>

      <div>
        <table
          border={1}
          className="text-white border w-full max-w-[720px] mx-auto"
        >
          <caption className="font-semibold text-lg mb-2">
            8 aulas por mês (duas aulas por semana)
          </caption>
          <thead>
            <tr className="bg-secondary text-center">
              <th scope="col" className="p-2 border border-secondary">
                Duração
              </th>
              <th scope="col" className="p-2 border border-secondary">
                Valor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary">
            <tr className="text-center">
              <td className="p-2 border border-secondary">1 mês</td>
              <td className="p-2 border border-secondary">
                R$ 1300,00 por mês
              </td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">2 meses</td>
              <td className="p-2 border border-secondary">
                R$ 1200,00 por mês
              </td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">3 meses</td>
              <td className="p-2 border border-secondary">
                R$ 1100,00 por mês
              </td>
            </tr>
          </tbody>
        </table>

        <table
          border={1}
          className="text-white border-collapse w-full max-w-[720px] mx-auto"
        >
          <caption className="font-semibold text-lg m-2">
            4 aulas por mês (uma aula por semana)
          </caption>
          <thead>
            <tr className="bg-secondary text-center">
              <th scope="col" className="p-2 border border-secondary">
                Duração
              </th>
              <th scope="col" className="p-2 border border-secondary">
                Valor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary">
            <tr className="text-center">
              <td className="p-2 border border-secondary text-center">1 mês</td>
              <td className="p-2 border border-secondary">R$ 800,00 por mês</td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">2 meses</td>
              <td className="p-2 border border-secondary">R$ 780,00 por mês</td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-secondary">3 meses</td>
              <td className="p-2 border border-secondary">R$ 750,00 por mês</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <table
          border={1}
          className="text-white border-collapse w-full max-w-[720px] mx-auto"
        >
          <caption className="font-semibold text-lg m-2">
            Consulta comportamental
          </caption>
          <tbody className="divide-y divide-secondary">
            <tr className="text-center">
              <td className="p-2 border border-secondary">R$ 500,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Valores;
