import React from "react";
import moment from "moment";
import { Comment } from "semantic-ui-react";
import "components/members/members.styles.scss";

export default function Members({ users }) {
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
              <div>{moment(member.registered.date).format("L")}</div>
            </Comment.Metadata>
            <Comment.Text className="members__data--text">
              {member.email}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      );
    });
  };

  return (
    <div className="members">
      <h3 className="members__title">New Members</h3>

      <div className="members__data">
        <Comment.Group size="big">{renderMembers()}</Comment.Group>
      </div>
    </div>
  );
}
