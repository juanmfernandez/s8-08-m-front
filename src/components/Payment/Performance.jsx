import Chart from "./Chart";

const Performance = () => {
  return (
    <div className="bg-white w-full rounded-xl p-4">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <h1 className="w-1/2 font-bold text-3xl pl-6">Performance</h1>
          <div className="flex flex-row justify-end w-1/2 gap-4 items-center">
            <div className="flex flex-row items-center gap-2">
              <hr className="w-10 h-0.5 bg-Violeta-xe" />
              Ingresos
            </div>
            <div className="flex flex-row items-center gap-2">
              <hr className="w-10 h-0.5 bg-Naraja-xe" />
              Gastos
            </div>
            <div>
              <select
                className="px-8 py-2 rounded-xl"
                name="filter"
                id="filter"
              >
                <option value="fecha">Fecha</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-1/2 p-10">
            <Chart />
        </div>
      </div>
    </div>
  );
};

export default Performance;
