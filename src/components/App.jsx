import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import Achievement from "./Achievement";
import AllAchievements from "./AllAchievements";
import Button from "./Button";

function App() {
  const initialAllAchievements = JSON.parse(localStorage.getItem("allAchievements"));
  const [achievements, setAchievements] = useState([]);
  const [allAchievements, setAllAchievements] = useState(initialAllAchievements);
  const [showAchievmentBox, setShowAchievmentBox] = useState(false);
  const [showShopBox, setShowShopBox] = useState(false);
  const [currentCount, setCurrentCount] = useState(false);
  localStorage.setItem("allAchievements", JSON.stringify(allAchievements));

  function addAchievement(newAch) {
    setAchievements([{message: newAch.message}]);
  }

  function clearAchievement() {
    setAchievements([{message: ""}]);
  }

  function updateAllAchievements(newAchievement) {
    setAllAchievements(prevAchievements => {
      return [...prevAchievements, newAchievement];
    });
  }

  function clearAllAchievements() {
    setAllAchievements([]);
  }

  function isShowingAchievments() {
    if (showAchievmentBox === false) {
      setShowAchievmentBox(true);
    } else {
      setShowAchievmentBox(false);
    }
  }

  function isShowingShop() {
    if (showShopBox === false) {
      setShowShopBox(true);
    } else {
      setShowShopBox(false);
    }
  }

  function getCountNumber(newCount) {
    setCurrentCount(newCount);
  }

  function resetCountNumber() {
    setCurrentCount(0);
  }


  return (
    <div>
      <Header
      showAllAchievements={isShowingAchievments}
      showMyShop={isShowingShop}
      />
      <Counter
        onAdd={addAchievement}
        onClear={clearAchievement}
        onAddAll={updateAllAchievements}
        onClearAll={clearAllAchievements}
        countNumber={getCountNumber}
        countNumberReset={resetCountNumber}
        />
      {achievements.map((achItem, index) => {
        return <Achievement
          key={index}
          AchievementMessage={achItem.message} />
      })}
      <div
        style={showAchievmentBox === true 
        ? {display: "block"} 
        : {display: "none"}} 
        className="achievementContainer">
        <h1>All Achievements:</h1>
        {allAchievements.map((allAchItem, index) => {
          return <AllAchievements
            key={index}
            allAchievementMessage={allAchItem.message} />
        })}
      </div>
      <div
        className="shopContainter"
        style={showShopBox === true 
        ? {display: "block"} 
        : {display: "none"}}>
        <h1>Shop:</h1>
          {currentCount >= 10 ? <Button label="1 click/sec (-100)"/> : null}
          {currentCount >= 100 ? <Button label="5 click/sec (-1500)"/> : null}
          {currentCount >= 500 ? <Button label="10 click/sec (-5000)"/> : null}
          {currentCount >= 1000 ? <Button label="20 click/sec (-10000)"/> : null}
          {currentCount >= 2500 ? <Button label="50 click/sec (-25000)"/> : null}
          {currentCount >= 5000 ? <Button label="100 click/sec (-50000)"/> : null}
      </div>
      <Footer />
    </div>    
  );
}

export default App;
