import React, {useState} from "react";

function Header(props) {
  const [isShowingAchievments, setShowingAchievments] = useState(false);
  const [isShowingShop, setShowingShop] = useState(false);

  function showAchievements(){
    if (isShowingAchievments === false) {
      setShowingAchievments(true);
    } else {
      setShowingAchievments(false);
    }
    props.showAllAchievements(isShowingAchievments);
  }

  function showShop(){
    if (isShowingShop === false) {
      setShowingShop(true);
    } else {
      setShowingShop(false);
    }
    props.showMyShop(isShowingShop);
  }

  return (
    <header>
      <h1><a href="#">Clicker App</a></h1>
      <div>
        <a onClick={showAchievements} href="#">Achievements</a>
        <a onClick={showShop} href="#">Shop</a>
      </div>
    </header>
  );
}

export default Header;
