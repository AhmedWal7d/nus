import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// تسجيل المكونات المطلوبة
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["منتج A", "منتج B", "منتج C", "منتج D"],
    datasets: [
      {
        label: "المبيعات",
        data: [300, 150, 200, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "#F8D442",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options:any = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "توزيع المبيعات حسب المنتج" },
    },
  };

  return <div  style={{ width: "200px", height: "200px" }}>
   <Doughnut data={data} options={options} />;</div>
};

export default DoughnutChart;
