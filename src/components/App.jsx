import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";

function App() {
  const [countState, setCountState] = useState({
    count: 0
  });

  function updateStatus(state) {
    setCountState({
      count: state.count
    });
    console.log(countState);
  }

  return (
    <div>
      <Header />
      <Counter onUpdate={updateStatus}/>
      <Footer />
    </div>    
  );
}

export default App;
