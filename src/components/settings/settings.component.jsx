import React from "react";
import { Form } from "semantic-ui-react";

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
  return (
    <div className="settings">
      <h3 className="settings__title">Settings</h3>

      <div className="settings__form">
        <Form>
          <Form.Checkbox
            toggle
            label="Send Email Notifications"
            id="settings__form--checkbox"
          />

          <Form.Checkbox toggle label="Set Profile To Public" />
          <Form.Select options={options} placeholder="Select Timezone" />
          <Form.Group widths="equal">
            <Form.Button fluid id="setting__form--btn-1">
              Save
            </Form.Button>
            <Form.Button fluid id="setting__form--btn-2">
              Cancel
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
