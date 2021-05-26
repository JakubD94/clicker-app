import React, { useState } from "react";

function Counter(props) {
  const initialCount = parseFloat(localStorage.getItem("count"));
  const initialLevel = parseFloat(localStorage.getItem("level"));
  const initialNextLevel = parseFloat(localStorage.getItem("nextLevel"));
  const [count, setCount] = useState(initialCount || 0);
  const [level, setLevel] = useState(initialLevel || 1);
  const [nextLevel, setNextLevel] = useState(initialNextLevel || 10);
  localStorage.setItem("count", count);
  localStorage.setItem("level", level);
  localStorage.setItem("nextLevel", nextLevel);

  function updateCounter() {
    const state = {
      count: count + 1
    };
    props.onUpdate(state);
  }

  function increase() {
    setCount(count + 1);
    if (count + 1 === nextLevel) {
      setNextLevel(nextLevel * 2);
      setLevel(level + 1);
    };

    updateCounter();
  }

  function reset() {
    setCount(0);
    setLevel(1);
    setNextLevel(10);
    localStorage.clear();
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <h2>Level:{level}</h2>
      <button onClick={increase}>+</button>
      <button className="reset" onClick={reset}>RESET</button>
    </div>
  );
}

export default Counter;