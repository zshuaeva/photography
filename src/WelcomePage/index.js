import React from "react";
import './styles.css'

const WelcomePage = () => {
  const str = "Welcome to my Photography Portfolio";
  return(
    <>
    <div className="welcome-splash">
      { str }
    </div>
    </>
  )
};

export default WelcomePage;
