import React, { useEffect } from "react";
import "./App.css";
import Drawers from "./components/Drawers/Drawers_Continer";
import Main from "./components/Main/Main_Container";
import { getUserData } from "./redux/reducers/userInfoReducers";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    const ulan = {
      login: "ulan",
      password: "123",
      data: {
        cashe: {
          income: "200usd",
          consumption: "20USD"
        },
        shoppingList: [
          {
            category: "food",
            value: "125USD",
            time: "12:25:07 20.08.2019"
          },
          {
            category: "entertainment",
            value: "13USD",
            time: "12:25:07 20.08.2019"
          }
        ]
      }
    };
    var sterialObj = JSON.stringify(ulan);
    localStorage.setItem("ulan", sterialObj);
    var returnObj = JSON.parse(localStorage.getItem("ulan"));
    props.getUserData("ulan", "123");
  });

  return (
    <div>
      <Drawers />
      <Main />
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { getUserData }
)(App);
