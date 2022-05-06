import { useState, useEffect } from "react";

export default function User() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((results) => results.json())
      .then((res) =>
        setFirstName(
          res.map((ele) => (
            <li>
              {ele.name} {lastName}
            </li>
          ))
        )
      );
    console.log(lastName);
  }, [lastName]);

  return (
    <>
      {firstName}

      <button onClick={() => setLastName("harry")}>submit</button>
    </>
  );
}
