import React from "react";
import { Form } from "semantic-ui-react";

import "components/users/users.styles.scss";

export default function Users() {
  return (
    <div className="users">
      <h3 className="users__title">Users</h3>

      <div className="users__form">
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid placeholder="Search for User" />
          </Form.Group>
          <Form.TextArea placeholder="Message for User" />

          <Form.Button fluid>Send</Form.Button>
        </Form>
      </div>
    </div>
  );
}
