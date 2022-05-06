import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import List from "./List";

function UseCallback() {
  // const [number, setNumber] = useState(1);
  // const [dark, setDark] = useState( );
  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  // const theme = {
  //   backgroundColor: dark ? "#333" : "#FFF",
  //   color: dark ? "#FFF" : "#333",
  // };

  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const calculateAge = useCallback(() => {
    setAge(age + 1)
  },[age]);

  const calculateSalary =useCallback( () => {
    setSalary(salary + 1000);

  },[salary])

  return (
    // <div style={theme}>
    //   <input
    //     type="number"
    //     value={number}
    //     onChange={(e) => setNumber(parseInt(e.target.value))}
    //   />
    //       <button onClick={() => setDark((dark) => !dark)}>toggle theme</button>
    //     <List getItems={getItems} />
    // </div>
    <>
      <Count text="Age" count={age} />
      <Button handleClick={calculateAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={calculateSalary}>Increment Salary</Button>
    </>
  );
}

export default UseCallback;
