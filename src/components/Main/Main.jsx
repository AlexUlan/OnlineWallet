import React from "react";
import RevenueWindow from "../RevenueWindow/RevenueWindow_Continer";
import ListOfExpenses from "../ListOfExpenses/ListOfExpenses_Container";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddingExpensesButton from "./../AddingExpenses/AddingExpensesButton/AddingExpensesButton_Continer";


export default (props)=>{
  return (
    <div>
       <Container maxWidth="lg">
       <CssBaseline />
       <RevenueWindow/>
       <ListOfExpenses/>
       <AddingExpensesButton/>
       </Container>
    </div> 
  )
}