import React from "react";

import Search from "components/search/search.component";

import "components/dashboard/dashboard.styles.scss";
import Alert from "components/alert/alert.component";

export default function Dashboard({ users }) {
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>
      <div className="dashboard__box">
        <Search users={users} dashboard icon="search" placeholder="Search..." />
      </div>

      <div className="dashboard__alert">
        <Alert />
      </div>
    </div>
  );
}
