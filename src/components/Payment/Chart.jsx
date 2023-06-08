import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const data = {
  labels: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  datasets: [
    {
      label: "Gastos",
      data: [
        1000, 2000, 1500, 3000, 2500, 4000, 3500, 5000, 4500, 6000, 5500, 7000,
      ],
      fill: false,
      borderColor: "#fc831c",
    },
    {
      label: "Ingresos",
      data: [
        500, 1000, 750, 1500, 1250, 2000, 1750, 2500, 2250, 3000, 2750, 3500,
      ],
      fill: false,
      borderColor: "#eb5cd1",
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false, // Oculta la leyenda
    },
  },
};
const Charts = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Charts;
