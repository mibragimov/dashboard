import React, { useState } from "react";
import { Form, Segment, Header, Icon, Button, Loader } from "semantic-ui-react";
import Search from "components/search/search.component";

import "components/users/users.styles.scss";

export default function Users({ users }) {
  const [isLoading, setIsLoading] = useState(false);
  const [emptyForm, setEmptyForm] = useState(true);

  const form = (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Search users={users} placeholder="Search for Users" required/>
      <Form.TextArea placeholder="Message for User" required />
      <Form.Button
        fluid
        id="users__form--btn"
        
      >
        Send
      </Form.Button>
    </Form>
  );

  const message = (
    <Segment placeholder>
      {isLoading ? (
        <Header icon id="message__header">
          <Loader active content="Sending..." inline/>
          
        </Header>
      ) : (
        <>
          <Header icon>
            <Icon name="check circle outline" />
            Sent!
          </Header>
          <Segment.Inline>
            <Button id="users__form--btn" onClick={() => setEmptyForm(true)}>
              New Message
            </Button>
          </Segment.Inline>
        </>
      )}
    </Segment>
  );

  const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
      setIsLoading(false);
    }, 2000)
    setEmptyForm(false);
  }

  
  return (
    <div className="users">
      <h3 className="users__title">Users</h3>

      <div className="users__form">{emptyForm ? form : message}</div>
    </div>
  );
}
