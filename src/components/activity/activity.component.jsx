import React from "react";
import { Comment, Icon } from "semantic-ui-react";

import "components/activity/activity.styles.scss";

export default function Activity({ users }) {
  const members = users.slice(1, 5);
  const renderMembers = () => {
    return members.map(member => {
      return (
        <Comment key={member.id.value}>
          <Comment.Avatar
            src={member.picture.medium}
            className="members__data--avatar"
          />
          <Comment.Content>
            <Comment.Author as="a">{member.name.first}</Comment.Author>
            <Comment.Metadata>
              <div>2 days ago</div>
              <div>
                <Icon name="star" />5 Faves
              </div>
            </Comment.Metadata>
            <Comment.Text>Commented on Facebook's change for 2016</Comment.Text>
          </Comment.Content>
        </Comment>
      );
    });
  };

  return (
    <div className="activity">
      <h3 className="activity__title">Activity</h3>

      <div className="activity__data">
        <Comment.Group size="big">{renderMembers()}</Comment.Group>
      </div>
    </div>
  );
}
