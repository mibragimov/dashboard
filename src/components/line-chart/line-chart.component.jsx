import React from "react";
import { Line } from "react-chartjs-2";

import "components/line-chart/line-chart.styles.scss";

export default class LineChart extends React.Component {
  state = {
    chartData: {
      labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
      ],
      datasets: [
        {
          data: [
            750,
            1250,
            1000,
            2000,
            1500,
            1750,
            1250,
            1850,
            2250,
            1500,
            2500
          ],

          backgroundColor: "rgba(116,119,191,0.35)",
          borderWidth: 1,
          lineTension: 0,
          pointRadius: 5,
          pointBackgroundColor: "#fff",
          pointBorderColor: "rgb(116,119,191)",
          pointBorderWidth: 2
        }
      ]
    },
    buttons: [
      { id: 1, name: "Hourly", className: "line-chart__control--item" },
      { id: 2, name: "Daily", className: "line-chart__control--item" },
      { id: 3, name: "Weekly", className: "line-chart__control--item" },
      { id: 4, name: "Monthly", className: "line-chart__control--item" }
    ],
    activeBtn: 3
  };

  handleClick = id => {
    const { chartData } = this.state;

    const randomData = chartData.datasets[0].data.map(
      num => num + Math.floor(Math.random() * 900)
    );
    this.setState(prevState => ({
      activeBtn: id,
      chartData: {
        labels: [...prevState.chartData.labels],
        datasets: [
          {
            data: [...randomData],
            backgroundColor: prevState.chartData.datasets[0].backgroundColor,
            borderWidth: prevState.chartData.datasets[0].borderWidth,
            lineTension: prevState.chartData.datasets[0].lineTension,
            pointRadius: prevState.chartData.datasets[0].pointRadius,
            pointBackgroundColor:
              prevState.chartData.datasets[0].pointBackgroundColor,
            pointBorderColor: prevState.chartData.datasets[0].pointBorderColor,
            pointBorderWidth: prevState.chartData.datasets[0].pointBorderWidth
          }
        ]
      }
    }));
  };

  renderButtons = () => {
    const { buttons, activeBtn } = this.state;

    return buttons.map(btn => {
      return (
        <li
          className={btn.className + (btn.id === activeBtn ? " active" : "")}
          key={btn.id}
          onClick={() => this.handleClick(btn.id)}
        >
          {btn.name}
        </li>
      );
    });
  };

  render() {
    const { chartData } = this.state;

    return (
      <div className="line-chart">
        <h3 className="line-chart__title">Traffic</h3>

        <ul className="line-chart__control">{this.renderButtons()}</ul>
        <div className="line-chart__data">
          <Line
            data={chartData}
            width={100}
            height={25}
            options={{
              legend: { hidden: true, display: false },
              tooltips: { enabled: false },
              maintainAspectRatio: true
            }}
          />
        </div>
      </div>
    );
  }
}
