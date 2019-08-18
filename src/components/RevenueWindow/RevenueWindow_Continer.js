import React from "react";
import RevenueWindow from "./RevenueWindow";
import { connect } from "react-redux";

const mapStateToProps = (state) =>{
  console.log(state);
  return {
    income: state.userData.user.data.cashe.income,
    consumption: state.userData.user.data.cashe.consumption,
  }
}

export default connect(mapStateToProps, null)(RevenueWindow)