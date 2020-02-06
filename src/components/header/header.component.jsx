import React from "react";

import bellIcon from "icons/icon-bell.svg";
import profilePicture from "images/member-2.jpg";

import "components/header/header.styles.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__brand">
        Your<span className="header__brand--span">App</span>
        <sup className="header__brand--extra">TM</sup>
      </h1>

      <img src={bellIcon} alt="bell" className="header__icon" />

      <div className="header__profile">
        <img
          src={profilePicture}
          alt="profile"
          className="header__profile--img"
        />
        <h6 className="header__profile--title">Josh Sullivan</h6>
      </div>
    </header>
  );
}
