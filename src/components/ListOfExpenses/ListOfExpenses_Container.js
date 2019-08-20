import { connect } from "react-redux";
import ListOfExpenses from "./ListOfExpenses"


const mapStateToProps = (state) => {
  return {
    arrayConsumption: state.userData.user.data.shoppingList
  }
}
export default connect(mapStateToProps,)(ListOfExpenses);