import React, { useState, useEffect } from "react";

const WindowResizeWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  // event listner callback function
  const actualWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });
  return (
    <div>
      <h2>Your window screen size is : </h2>
      <h1>{windowWidth}</h1>
    </div>
  );
};

export default WindowResizeWidth;
