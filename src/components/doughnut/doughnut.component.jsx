import React from "react";
import { Doughnut } from "react-chartjs-2";

import "components/doughnut/doughnut.styles.scss";

const data = {
  labels: ["Phones", "Tablets", "Desktop"],
  datasets: [
    {
      data: [10, 15, 75],
      backgroundColor: ["#74b1bf", "#81c98f", "rgba(116,119,191)"],
      borderWidth: 0
    }
  ]
};
const options = {
  legend: {
    position: "right",
    labels: {
      boxWidth: 16,
      fontSize: 16,
      padding: 20
    }
  },
  tooltips: {
    cornerRadius: 5
  }
};

export default function DoughnutChart() {
  return (
    <div className="doughnut">
      <h3 className="doughnut__title">Mobile Users</h3>
      <div className="doughnut__data">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
