import React, { useState } from "react";

const UseStateArray = () => {
  const data = [
    {
      id: 0,
      name: "khan",
      age: 22,
    },
    {
      id: 1,
      name: "Suleman",
      age: 24,
    },
    {
      id: 2,
      name: "Zameer",
      age: 23,
    },
  ];
  const [record, setRecord] = useState(data);
  const clearData = () => {
    setRecord([]);
  };

  const del = (id) => {
    const deleteData = record.filter((r) => {
      return r.id != id;
    });
    setRecord(deleteData);
  };

  return (
    <div>
      <h2>Employee Records</h2>

      {record.map((rec) => {
        return (
          <div>
            <li key={rec.id}>
              This is {rec.name} who age is {rec.age}
              <button onClick={() => del(rec.id)}>x</button>
            </li>
          </div>
        );
      })}
      <button onClick={clearData}>clear</button>
      <hr />
    </div>
  );
};

export default UseStateArray;
