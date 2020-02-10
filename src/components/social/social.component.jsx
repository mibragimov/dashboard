import React from "react";
import { Icon } from "semantic-ui-react";

import "components/social/social.styles.scss";

const initialStats = [
  { name: "Twitter", numbers: 10345, icon: "twitter" },
  { name: "Facebook", numbers: 8739, icon: "facebook f" },
  { name: "Google+", numbers: 2530, icon: "google plus g" }
];

export default class Social extends React.Component {
  state = {
    stats: initialStats
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        stats: prevState.stats.map(stat => ({...stat, numbers: stat.numbers + Math.floor(Math.random() * 9)}))
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  render() {
    const { stats } = this.state;

    return (
      <div className="social">
        <h3 className="social__title">Social</h3>

        <div className="social__data">
          {stats.map(stat => {
            return (
              <div key={stat.name} className="social__data__stats">
                <div className="social__data__stats--icon">
                  <Icon name={stat.icon} size="big" />
                </div>

                <div className="social__data__stats--content">
                  <h4 className="social__data__stats--content--name">
                    {stat.name}
                  </h4>
                  <p className="social__data__stats--content--numbers">
                    {this.numberWithCommas(stat.numbers)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
