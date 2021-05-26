import React, { useState } from "react";

function Counter(props) {
  const initialCount = parseFloat(localStorage.getItem("count"));
  const initialLevel = parseFloat(localStorage.getItem("level"));
  const initialNextLevel = parseFloat(localStorage.getItem("nextLevel"));
  const [count, setCount] = useState(initialCount || 0);
  const [level, setLevel] = useState(initialLevel || 1);
  const [nextLevel, setNextLevel] = useState(initialNextLevel || 10);
  const [newAchievement, setNewAchievement] = useState({message: ""});
  localStorage.setItem("count", count);
  localStorage.setItem("level", level);
  localStorage.setItem("nextLevel", nextLevel);

  function increase() {
    setCount(count + 1);
    if (count + 1 === nextLevel) {
      setNextLevel(nextLevel * 2);
      setLevel(level + 1);
      setNewAchievement({message: "New Achievement: You have clicked " + (count + 1) + " times!"});
    };
    updateAchievement();
    updateAllAchievement();
    passCount();
  }

  function reset() {
    setCount(0);
    setLevel(1);
    setNextLevel(10);
    setNewAchievement({message: ""});
    localStorage.clear();
    clearAchievement();
    clearAllAchievements();
    passResetCount();
  }

  function updateAchievement() {
    props.onAdd(newAchievement);
  }

  function updateAllAchievement() {
    if (count + 1 === nextLevel) {
      props.onAddAll({message: (count + 1) + " clicks!"});
    };
  }

  function clearAchievement() {
    props.onClear({message: ""});
  }

  function clearAllAchievements() {
    props.onClearAll([]);
  }

  function passCount() {
    props.countNumber(count + 2);
  }

  function passResetCount() {
    props.countNumberReset(0);
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