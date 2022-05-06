import React, { useState } from "react";

function StateHookObj() {
  const [state, setState] = useState({
    fname: "joy",
    lname: "roy",
    years: 15,
    place: "pune",
  });

  const onHandle = () => {
    setState((prev) => {
      return {
        ...prev,
        fname: "Tom",
        lname: "jerry",
        years: prev.years + 1,
        place: "mumbai",
      };
    });
  };
  return (
    <div>
      <p>
        my first name is {state.fname} and last name is {state.lname}. I am
        {state.years} and I am from {state.place}
      </p>
      <button onClick={onHandle}>click</button>
    </div>
  );
}

export default StateHookObj;
