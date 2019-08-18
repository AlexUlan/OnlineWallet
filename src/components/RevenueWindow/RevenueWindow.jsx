import React from "react"

export default (props)=>{
  return (
    <div>
       <div>Расходы:{props.consumption}</div>
       <div>Доходы:{props.income}</div>
    </div> 
  )
}