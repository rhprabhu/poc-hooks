import React, { useEffect, useState } from "react";

function Effect1() {
  const [name, setName] = useState("mario");
  const [place, setPlace] = useState("bangalore");
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("hi");
    console.log(count);
  });
  return (
    <div>
      <h1>{name}</h1>

      <button onClick={() => setName("Tommy")}>change</button>
      <h1>{place}</h1>
      <button onClick={() => setPlace("Mumbai")}>place</button>
      <br />
      <br />

      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
}

export default Effect1;
