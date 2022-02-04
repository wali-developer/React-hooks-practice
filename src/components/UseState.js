import React from "react";
import { useState } from "react";

const UseState = () => {
  const [myName, setMyName] = useState("Waliullah");
  const change = () => {
    // toggle myName
    myName == "Waliullah" ? setMyName("Izhaan") : setMyName("Waliullah");
  };
  return (
    <div>
      <h4>This is {myName}</h4>
      <button onClick={change}>Click to change Name</button>
      <hr />
    </div>
  );
};

export default UseState;
