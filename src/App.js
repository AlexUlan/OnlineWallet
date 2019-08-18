import React, { useEffect } from "react";
import "./App.css";
import Drawers from "./components/Drawers/Drawers_Continer";
import Main from "./components/Main/Main_Container";
import { getUserData } from "./redux/reducers/userInfoReducers";
import { connect } from "react-redux";


function App(props) {
  useEffect(() => {
    // const ulan = {
    //   login: "ulan",
    //   password: "123",
    //   data: {
    //     cashe: {
    //       income: "200usd",
    //       consumption: "20USD"
    //     },
    //     category: 
    //     { 
    //       food: "125USD" 
    //     }
    //   }
    // };
    // var sterialObj = JSON.stringify(ulan);
    // localStorage.setItem("ulan", sterialObj);
    // var returnObj = JSON.parse(localStorage.getItem("ulan"));
    // console.log(returnObj);
    props.getUserData("ulan", "123");
  });

  return (
    <div>
      <Drawers />
      <Main/>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {

  }
}

export default connect(mapStateToProps,{getUserData})(App);
