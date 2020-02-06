import React from "react";
import { Line } from "react-chartjs-2";

import "components/line-chart/line-chart.styles.scss";

export default class LineChart extends React.Component {
  state = {
    chartData: {
       labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
         datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116,119,191,0.35)',
        borderWidth: 1,
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgb(116,119,191)',
        pointBorderWidth: 2
      }]
    }
  };
  render() {
    const { chartData } = this.state;

    return (
      <div className="line-chart">
      <h3 className="line-chart__title">Traffic</h3>

      <ul className="line-chart__control">
        <li className="line-chart__control--item">Hourly</li>
        <li className="line-chart__control--item">Daily</li>
        <li className="line-chart__control--item">Weekly</li>
        <li className="line-chart__control--item">Monthly</li>
      </ul>
      
        <Line
          data={chartData}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        
        />
      </div>
    );
  }
}
