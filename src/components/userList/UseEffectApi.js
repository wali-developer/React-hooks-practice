import React, { useState, useEffect } from "react";
import User from "./User";

const UseEffectApi = () => {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  // style
  const heading1 = {
    fontWeight: "bolder",
    fontSize: "40px",
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={heading1}>Company Users</h1>
      <User userDetails={user} />
    </div>
  );
};

export default UseEffectApi;
