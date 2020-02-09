import React from "react";
import { Form } from "semantic-ui-react";
import Search from "components/search/search.component";

import "components/users/users.styles.scss";

export default function Users({ users, search }) {
  return (
    <div className="users">
      <h3 className="users__title">Users</h3>

      <div className="users__form">
        <Form>
          <Search users={users} placeholder="Search for Users" />

          <Form.TextArea placeholder="Message for User" />

          <Form.Button fluid id="users__form--btn">
            Send
          </Form.Button>
        </Form>
      </div>
    </div>
  );
}
