import React, { useReducer } from "react";
import { Button } from "semantic-ui-react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "Increment") {
    return state + 1;
  } else if (action.type === "Decrement") {
    return state - 1;
  }
  return state;
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{state}</h1>
      <Button onClick={() => dispatch({ type: "Increment" })}>Increment</Button>
      <Button onClick={() => dispatch({ type: "Decrement" })}>Decrement</Button>
    </div>
  );
};

export default UseReducer;
