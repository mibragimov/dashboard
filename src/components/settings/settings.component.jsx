import React from "react";
import { Form } from "semantic-ui-react";

import "components/settings/settings.styles.scss";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

export default function Settings() {
  return (
    <div className="settings">
      <h3 className="settings__title">Settings</h3>

      <div className="settings__form">
        <Form>
          <Form.Checkbox toggle label="Send Email Notifications" />

          <Form.Checkbox toggle label="Set Profile To Public" />
          <Form.Select options={options} placeholder="Select Timezone" />
          <Form.Group widths="equal">
            <Form.Button fluid className="setting__form--btn-1">
              Save
            </Form.Button>
            <Form.Button fluid className="setting__form--btn-2">
              Cancel
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
