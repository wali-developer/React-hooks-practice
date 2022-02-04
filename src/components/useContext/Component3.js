import React, { useContext } from "react";
import { ReactData } from "./Component1";

const Component3 = () => {
  const text = useContext(ReactData);
  return (
    <div>
      <h2>This is done with {text}</h2>
    </div>
  );
};

export default Component3;
