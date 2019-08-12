import React, { useEffect } from "react";
import "./App.css";
import Drawers from "./components/Drawers/Drawers_Continer";
import Main from "./components/Main/Main_Container";


function App() {
  useEffect(() => {
    const user = {
      login: "ulan",
      password: "123",
      data: {
        cashe: {
          income: "200usd",
          consumption: "20USD"
        },
        category: 
        { 
          food: "125USD" 
        }
      }
    };
    var sterialObj = JSON.stringify(user);
    localStorage.setItem("users", sterialObj);
    var returnObj = JSON.parse(localStorage.getItem("users"));
    console.log(returnObj);
  });

  return (
    <div>
      <Drawers />
      <Main/>
    </div>
  );
}

export default App;
