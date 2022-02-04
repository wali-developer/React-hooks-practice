import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count >= 1) {
      document.title = `Chats (${count})`;
    } else {
      document.title = `Chats`;
    }
  }, [count]); // useEffect second parameter is an arary (useEffect denpendency) that says that the useEffect only rerendered when the count changed otherwise useEffect will renedered just once.

  return (
    <div>
      <h2>{count}</h2>
      <Button onClick={changeCount} primary>
        Count
      </Button>
    </div>
  );
};

export default UseEffect1;
