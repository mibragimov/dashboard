import React, { useState } from "react";
import { Message } from "semantic-ui-react";

import "components/alert/alert.styles.scss";

const Alert = () => {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);

    setTimeout(() => {
      setVisible(true);
    }, 3000);
  };

  if (visible) {
    return (
      <Message
        onDismiss={handleDismiss}
        floating
        content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
        className="alert__message"
      />
    );
  }

  return <div style={{ display: "none" }}></div>;
};

export default Alert;
