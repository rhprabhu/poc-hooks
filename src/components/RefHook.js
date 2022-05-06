import React, { useRef } from "react";

function RefHook() {
  const conRef = useRef();
  const submit = () => {
    console.log(conRef.current.value);
  };
  return (
    <div>
      <input type="text" ref={conRef} name="name" />
      <button onClick={submit}>Go</button>
    </div>
  );
}

export default RefHook;
