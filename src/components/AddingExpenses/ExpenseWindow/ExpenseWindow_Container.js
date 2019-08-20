import ExpenseWindow from "./ExpenseWindow"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    category : state.userData.category
  }
}
export default connect(mapStateToProps, )(ExpenseWindow);