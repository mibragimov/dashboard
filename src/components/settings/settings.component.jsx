import React, { useState } from "react";
import { Form, Segment, Header, Icon, Loader, Button } from "semantic-ui-react";

import "components/settings/settings.styles.scss";

const options = [
  { key: "1", text: "(GMT-12:00) International Date Line West", value: "-12" },
  { key: "2", text: "(GMT-08:00) Pacific Time (US & Canada)", value: "-8" },
  {
    key: "3",
    text: "(GMT+03:00) Moscow, St. Petersburg, Volgograd",
    value: "+3"
  }
];

export default function Settings() {
  const [isLoading, setIsLoading] = useState(false);
  const [emptyForm, setEmptyForm] = useState(true);

  const form = (
    <Form>
      <Form.Checkbox
        toggle
        label="Send Email Notifications"
        id="settings__form--checkbox"
      />

      <Form.Checkbox toggle label="Set Profile To Public" required/>
      <Form.Select options={options} placeholder="Select Timezone" required />
      <Form.Group widths="equal">
        <Form.Button fluid id="setting__form--btn-1" onClick={(e) => handleSubmit(e)}>
          Save
        </Form.Button>
        <Form.Button fluid id="setting__form--btn-2">
          Cancel
        </Form.Button>
      </Form.Group>
    </Form>
  );

  const message = (
    <Segment placeholder>
      {isLoading ? (
        <Header icon id="message__header">
          <Loader active content="Saving..." inline />
        </Header>
      ) : (
        <>
          <Header icon>
            <Icon name="check circle outline" />
            Saved!
          </Header>
          <Segment.Inline>
            <Button id="users__form--btn" onClick={() => setEmptyForm(true)}>
              Reset
            </Button>
          </Segment.Inline>
        </>
      )}
    </Segment>
  );

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    setEmptyForm(false);
  };

  return (
    <div className="settings">
      <h3 className="settings__title">Settings</h3>

      <div className="settings__form">{emptyForm ? form : message}</div>
    </div>
  );
}
