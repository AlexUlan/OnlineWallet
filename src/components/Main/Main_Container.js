import React from "react";
import Main from "./Main";
import { connect } from "react-redux";

const mapStateToProps = (state) =>{
  console.log(state);
  return {
    // income: state.userData.user.data.cashe.income,
    // consumption: state.userData.user.data.cashe.consumption,
  }
}

export default connect(mapStateToProps, null)(Main)