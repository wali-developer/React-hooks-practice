import React from "react";
import { Card, Image } from "semantic-ui-react";
import faker from "faker";
import { FcApproval } from "react-icons/fc";

const User = (props) => {
  console.log(props.userDetails);
  return (
    <div>
      <Card.Group>
        {props.userDetails.map((rec) => {
          const { id, name, email } = rec;
          return (
            <Card key={id} style={{ margin: "25px auto", padding: "8px" }}>
              <Card.Content>
                <Image floated="right" size="mini" src={faker.image.image()} />
                <Card.Header>
                  {name}
                  <FcApproval />
                </Card.Header>
                <Card.Meta>{email}</Card.Meta>
                <Card.Description>{faker.lorem.sentence()}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </div>
  );
};

export default User;
