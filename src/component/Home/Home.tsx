import { AiOutlineLike } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { FiDollarSign } from "react-icons/fi";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import DoughnutChart from "./SartHome";

// تسجيل المكونات المطلوبة
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Home() {
  const data = {
    labels: ["منتج A", "منتج B", "منتج C", "منتج D", "منتج E"],
    datasets: [
      {
        label: "المبيعات",
        data: [120, 200, 150, 170, 250],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "#F8D442",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "توزيع المبيعات حسب المنتج" },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-light vh-100">
      <div className="row pt-3 px-3">
        <div className="col-md-3">
          <div className="bg-color h-cart-home">
            <div className="d-flex justify-content-between mx-3 pt-4 text-white">
              <h5>Earning</h5>
              <FiDollarSign size={25} />
            </div>
            <div className="text-center text-white pt-3">
              <h1>547 $</h1>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white h-cart-home shadow-lg">
            <div className="d-flex justify-content-between mx-3 pt-4">
              <h5>Share</h5>
              <FaShareAlt size={25} className="text-color" />
            </div>
            <div className="text-center pt-3">
              <h1>5255</h1>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white h-cart-home shadow-lg">
            <div className="d-flex justify-content-between mx-3 pt-4">
              <h5>Like</h5>
              <AiOutlineLike size={25} className="text-color" />
            </div>
            <div className="text-center pt-3">
              <h1>5785</h1>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white h-cart-home shadow-lg">
            <div className="d-flex justify-content-between mx-3 pt-4">
              <h5>Rating</h5>
              <FcRating size={25} className="text-color" />
            </div>
            <div className="text-center pt-3">
              <h1>8,5</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 row">
        <div className="col-md-9">
          <div >
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white text-center">
            <div className="pt-3">
              <DoughnutChart />
            </div>
            <div className="px-3 pt-">
              <h5 className="text-muted">Lorem, ipsum dolor.</h5>
              <h5 className="text-muted">Lorem, ipsum dolor.</h5>
              <h5 className="text-muted">Lorem, ipsum dolor.</h5>
              <h5 className="text-muted">Lorem, ipsum dolor.</h5>
              <h5 className="text-muted">Lorem, ipsum dolor.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
