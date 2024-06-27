import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.timestamp),
    datasets: [
      {
        label: "Sample Data",
        data: data.map((d) => d.value),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {};

  return <Line data={chartData} options={options} />;
};

export default ChartComponent;
