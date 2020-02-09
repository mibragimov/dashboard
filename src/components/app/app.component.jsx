import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "layout/layout.component";
import Header from "components/header/header.component";
import Navigation from "components/navigation/nav.component";
import LineChart from "components/line-chart/line-chart.component";
import BarChart from "components/bar-chart/bar-chart.component";
import Doughnut from "components/doughnut/doughnut.component";
import Social from "components/social/social.component";
import Members from "components/members/members.component";
import Activity from "components/activity/activity.component";
import Users from "components/users/users.component";
import Settings from "components/settings/settings.component";
import Dashboard from "components/dashboard/dashboard.component";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?results=10&inc=name,email,picture,location,registered,id&nat=us"
      );

      setUsers(response.data.results);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Layout>
      <Header users={users} />
      <Navigation />
      <Dashboard users={users} error={error} />
      <LineChart />
      <BarChart />
      <Doughnut />
      <Social />
      <Members users={users} />
      <Activity users={users} />
      <Users users={users} search />
      <Settings />
    </Layout>
  );
};

export default App;
