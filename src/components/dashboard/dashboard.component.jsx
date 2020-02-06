import React from "react";
import Search from "components/search/search.component";

import "components/dashboard/dashboard.styles.scss";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>
      <div className="dashboard__box">
        <Search />
      </div>
    </div>
  );
}
