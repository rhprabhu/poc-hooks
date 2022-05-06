import React, { useState, useMemo } from "react";

function Counter() {
  const [counterIncre, setCounterIncre] = useState(0);
  const [counterDecre, setCounterDecre] = useState(0);

  const handleIncre = () => {
    setCounterIncre(counterIncre + 1);
  };

  const handleDecre = () => {
    setCounterDecre(counterDecre - 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterIncre % 2 === 0;
  }, [counterIncre]);
  return (
    <div>
      <button onClick={handleIncre}>Count one -{counterIncre}</button>
      <span>{isEven ? "Even number" : "Odd number"}</span>
      <button onClick={handleDecre}>Count Two {counterDecre}</button>
    </div>
  );
}

export default Counter;
