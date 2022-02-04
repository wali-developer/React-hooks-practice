import React, { useState } from "react";
import Menu from "./MenuItem";
import "./GalleryReact.css";
import MenuDish from "./MenuDish";
import { Card } from "semantic-ui-react";
import MenuCategory from "./MenuCategory";

// Style for heading
const heading = {
  fontFamily: "Lobster",
  fontSize: "50px",
};

const allCategory = [
  ...new Set(
    Menu.map((item) => {
      return item.category;
    })
  ),
  "All",
];

const GalleryReact = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [categoryItems, setCategoryItems] = useState(allCategory);

  const filterData = (catItem) => {
    if (catItem === "All") {
      setMenuData(Menu);
      return;
    }

    const filterD = Menu.filter((filterItem) => {
      return filterItem.category === catItem;
    });
    setMenuData(filterD);
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "30px auto" }}>
        <h1 style={heading}>Order Your Favourite Dish</h1>
        <hr />
      </div>
      <MenuCategory filterData={filterData} categoryItems={categoryItems} />
      <Card.Group>
        {/* Render Single menu dish */}
        <MenuDish menuData={menuData} />
      </Card.Group>
    </div>
  );
};

export default GalleryReact;
