import ReactDOM from "react-dom";
import React, { Component, useState, useContext } from "react";


//create context object using React.createContext Method
const employeeContext = React.createContext();

function MainEmpl() {
  const [employee, setEmployee] = useState({
    Id: 101,
    Name: "Pragim",
    Location: "Bangalore",
    Salary: 12345,
  });
  return (
    <div>
      <h2>Welcome to App Component...</h2>
      {/* it takes value as it's attribute */}
      <employeeContext.Provider value={employee}>
        <Employee />
      </employeeContext.Provider>
    </div>
  );
}

function Employee() {
  let context = useContext(employeeContext);

  return (
    <div>
      <h2>Welcome to Employee Component...</h2>
      <p>
        <label>
          Employee ID : <b>{context.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Name : <b>{context.Name}</b>
        </label>
      </p>
      <Salary></Salary>
    </div>
  );
}

function Salary() {
  let context = useContext(employeeContext);

  return (
    <div>
      <h2>Welcome to Salary Component...</h2>
      <p>
        <label>
          Employee ID : <b>{context.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Salary : <b>{context.Salary}</b>
        </label>
      </p>
    </div>
  );
}

export default MainEmpl;
