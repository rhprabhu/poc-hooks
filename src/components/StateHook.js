import React, { useState } from "react";
import Effect1 from "./Effect1";
import StateHookObj from "./StateHookObj";

function StateHook() {
  const [language, setLangauage] = useState("React!!..");
  const [years, setYears] = useState(0);

  const handleChange = () => {
    setLangauage("Javascript");
    // setYears(years + 1);
    setYears((prev) => prev + 1);
  };
  return (
    <div>
      I know {language} from this may {years} months
      <button onClick={handleChange}>change</button>
      {handleChange}
      <StateHookObj />
    </div>
  );
}

export default StateHook;
