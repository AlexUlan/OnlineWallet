import React from "react"
import RevenueWindow from "../RevenueWindow/RevenueWindow_Continer";
import ListOfExpenses from "../ListOfExpenses/ListOfExpenses";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default (props)=>{
  return (
    <div>
       <Container maxWidth="lg">
       <CssBaseline />
       <RevenueWindow/>
       <ListOfExpenses/>
       </Container>
    </div> 
  )
}