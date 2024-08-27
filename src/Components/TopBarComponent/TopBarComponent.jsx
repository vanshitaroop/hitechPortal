import React, { useEffect, useState } from "react";

const TopBarComponent = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Night");
    }
  }, []);
  
  return (
    <div className="CommonBar">
      <div style={{width:"100%",padding:"0px 30px",height:"100%",display:"flex",alignItems:"center"}}>
      {greeting}, Hitech
      </div>
    </div>
  );
};

export default TopBarComponent;
