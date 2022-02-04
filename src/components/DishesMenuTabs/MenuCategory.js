import React from "react";
import { Button } from "semantic-ui-react";

const MenuCategory = ({ filterData, categoryItems }) => {
  return (
    <div style={{ textAlign: "center", margin: "30px auto" }}>
      <h1 style={{ fontFamily: "Lobster" }}>Categories</h1>
      {categoryItems.map((categoryItem, index) => {
        return (
          <Button
            color="teal"
            onClick={() => filterData(categoryItem)}
            key={index}
          >
            {categoryItem}
          </Button>
        );
      })}
    </div>
  );
};

export default MenuCategory;
