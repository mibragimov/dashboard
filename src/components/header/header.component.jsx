import React, { useState } from "react";
import { Label, Popup } from "semantic-ui-react";

import bellIcon from "icons/icon-bell.svg";

import "components/header/header.styles.scss";

export default function Header({ users }) {
  const [isOpen, setIsOpen] = useState(false);

  let timeout;

  const handleOpen = () => {
    setIsOpen(true);

    timeout = setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  };

  const handleClose = () => {
    setIsOpen(false);
    clearTimeout(timeout);
  };

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
        <Label
          floating
          size="small"
          circular
          className="header__notification--label"
          content="3"
        />
        <Popup
          trigger={
            <img
              src={bellIcon}
              alt="bell"
              className="header__notification--icon"
            />
          }
          content="You have 3 unread messages"
          on="click"
          position="bottom right"
          open={isOpen}
          onClose={handleClose}
          onOpen={handleOpen}
        />
      </div>
      {renderUser()}
    </header>
  );
}
