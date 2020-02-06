import React from "react";
import { NavLink } from "react-router-dom";

import "components/navigation/nav.styles.scss";
import dashboard from "icons/icon-dashboard.svg";
import members from "icons/icon-members.svg";
import settings from "icons/icon-settings.svg";
import visits from "icons/icon-visits.svg";

export default function Navigaton() {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        exact
        className="navigation__item"
        activeClassName="navigation__item--active"
      >
        <img
          src={dashboard}
          alt="dashboard"
          className="navigation__item--icon"
        />
      </NavLink>
      <NavLink
        to="/members"
        className="navigation__item"
        activeClassName="navigation__item--active"
      >
        <img src={members} alt="dashboard" className="navigation__item--icon" />
      </NavLink>

      <NavLink
        to="/visits"
        className="navigation__item"
        activeClassName="navigation__item--active"
      >
        <img src={visits} alt="dashboard" className="navigation__item--icon" />
      </NavLink>
      <NavLink
        to="/settings"
        className="navigation__item"
        activeClassName="navigation__item--active"
      >
        <img
          src={settings}
          alt="dashboard"
          className="navigation__item--icon"
        />
      </NavLink>
    </nav>
  );
}
