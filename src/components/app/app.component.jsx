import React from "react";
import Layout from "layout/layout.component";
import Header from "components/header/header.component";
import Navigation from "components/navigation/nav.component";
import Search from "components/search/search.component";
import LineChart from "components/line-chart/line-chart.component";
import BarChart from "components/bar-chart/bar-chart.component";
import Doughnut from "components/doughnut/doughnut.component";
import Social from "components/social/social.component";
import Members from "components/members/members.component";
import Activity from "components/activity/activity.component";
import Users from "components/users/users.component";
import Settings from "components/settings/settings.component";

const App = () => {
  return (
    <Layout>
      <Header />
      <Navigation />
      <Search />
      <LineChart />
      <BarChart />
      <Doughnut />
      <Social />
      <Members />
      <Activity />
      <Users />
      <Settings />
    </Layout>
  );
};

export default App;
