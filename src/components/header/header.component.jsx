import React from "react";
import { Label } from "semantic-ui-react";

import bellIcon from "icons/icon-bell.svg";

import "components/header/header.styles.scss";

export default function Header({ users }) {
  const renderUser = () => {
    if (users.length) {
      const activeUser = users.filter((user, index) => index === 7);
      const activeUserName =
        activeUser[0].name.first + " " + activeUser[0].name.last;
      const activeUserPicture = activeUser[0].picture.medium;

      return (
        <div className="header__profile">
          <img
            src={activeUserPicture}
            alt="profile"
            className="header__profile--img"
          />
          <h6 className="header__profile--title">{activeUserName}</h6>
        </div>
      );
    } else {
      return <div>Logging in...</div>;
    }
  };

  return (
    <header className="header">
      <h1 className="header__brand">
        Your<span className="header__brand--span">App</span>
        <sup className="header__brand--extra">TM</sup>
      </h1>
      <div className="header__notification">
        <img src={bellIcon} alt="bell" className="header__notification--icon" />
        <Label
          floating
          size="small"
          circular
          className="header__notification--label"
        >
          3
        </Label>
      </div>
      {renderUser()}
    </header>
  );
}
