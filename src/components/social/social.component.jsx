import React from "react";
import { Icon } from "semantic-ui-react";

import "components/social/social.styles.scss";

const stats = [
  { name: "Twitter", numbers: "10, 345", icon: "twitter" },
  { name: "Facebook", numbers: "8.739", icon: "facebook" },
  { name: "Google+", numbers: "2,530", icon: "google plus g" }
];

export default function Social() {
  return (
    <div className="social">
      <h3 className="social__title">Social</h3>

      <div className="social__data">
        {stats.map(stat => {
          return (
            <div key={stat.name} className="social__data--stats">
              <Icon name={stat.icon} />
              <div>{stat.name}</div>
              <div>{stat.numbers}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
