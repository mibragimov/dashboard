import React from "react";
import { Bar } from "react-chartjs-2";

import "components/bar-chart/bar-chart.styles.scss";

const data = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      data: [75, 100, 175, 125, 225, 200, 100],
      backgroundColor: "rgba(116,119,191)",
      borderWidth: 1
    }
  ]
};

export default function BarChart() {
  return (
    <div className="bar-chart">
      <h3 className="bar-chart__title">Daily Traffic</h3>
      <div className="bar-chart__data">
        <Bar
          data={data}
          options={{
            legend: { hidden: true, display: false },
            tooltips: { enabled: false, cornerRadius: 5 }
          }}
        />
      </div>
    </div>
  );
}
