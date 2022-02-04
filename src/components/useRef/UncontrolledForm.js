import React, { useState, useRef } from "react";
import { Button } from "semantic-ui-react";

const UncontrolledForm = () => {
  const myName = useRef(null);
  const [show, setShow] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const name = myName.current.value;
    name === "" ? alert("Input field is empty!") : setShow(true);
  };
  return (
    <div>
      <h2>useRef Hook</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          id="name"
          ref={myName}
          placeholder="Enter your Name..."
          style={{
            padding: "10px 20px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />
        <br />
        <br />
        <Button type="submit">Submit</Button>
      </form>
      <br />
      <p>{show ? `Your Name is ${myName.current.value}` : ""}</p>
    </div>
  );
};

export default UncontrolledForm;
