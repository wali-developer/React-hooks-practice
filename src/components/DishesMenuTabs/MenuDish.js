import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import faker from "faker";

const MenuDish = ({ menuData }) => {
  return (
    <>
      {menuData.map((rec) => {
        const { image, id, name, price } = rec;
        return (
          <Card style={{ margin: "15px auto", padding: "8px" }} key={id}>
            <Image src={image} wrapped ui={false} alt={name} />
            <Card.Content>
              <Card.Header>{rec.name}</Card.Header>
              <Card.Description>{faker.lorem.sentence()}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <span style={{ color: "black", fontSize: "17px" }}>{price}</span>
              <Button inverted color="green" style={{ float: "right" }}>
                Order Now
              </Button>
              <Card.Meta>
                <span className="date">Price may very on selected date</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        );
      })}
    </>
  );
};

export default MenuDish;
