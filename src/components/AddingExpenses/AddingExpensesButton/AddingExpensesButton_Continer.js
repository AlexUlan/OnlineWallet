import AddingExpensesButton from "./AddingExpensesButton";
import {addConsumptionAction} from "./../../../redux/reducers/userInfoReducers"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
 // console.log(state)
  return {
    category : state.userData.category
  }
}
export default connect(mapStateToProps, {addConsumptionAction})(AddingExpensesButton);
