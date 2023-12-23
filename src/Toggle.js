import React from 'react'
import './Style.css'
export const Toggle = ({value,tog}) => {
  return (
    <div>
        {value.map((item,index)=>{
            return(
                <>
                <div class="second">
                <h1 key={index}>|{item.name}| </h1>
                <h1 key={index}>|{item.dept}| </h1>
                <h1 key={index}>|{item.rate}| </h1>
                </div>
                </>
            )
        })}
        <button class="btntwo"onClick={tog}>Back</button>
    </div>
  )
}
