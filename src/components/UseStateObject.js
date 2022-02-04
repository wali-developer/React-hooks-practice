import React from "react";

const UseStateObject = () => {
  const [student, setstudent] = React.useState({
    name: "Shoaib",
    field: "Software Engineering",
    address: "Peshawar",
  });
  const updateRecord = () => {
    setstudent({ ...student, name: "Arsalan", field: "English" });
  };
  return (
    <div>
      <h2>Objects component...</h2>
      <p>
        {student.name} Studying {student.field} and he belongs to{" "}
        {student.address}
      </p>
      <button onClick={updateRecord}>Update Data</button>
      <hr />
    </div>
  );
};

export default UseStateObject;
