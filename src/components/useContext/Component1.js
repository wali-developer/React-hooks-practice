import React, { createContext } from "react";
import Component2 from "./Component2";

const ReactData = createContext(); // context

const Component1 = () => {
  return (
    // Provider
    <ReactData.Provider value={"React useContext hook"}>
      <Component2 />
    </ReactData.Provider>
  );
};

export default Component1;
export { ReactData };
