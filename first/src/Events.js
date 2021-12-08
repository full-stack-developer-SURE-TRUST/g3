import React, { useState } from "react"

const Events=()=>{
    const purple = "#9457eb";
    const[bg, change]= useState(purple)
    const [name, changename] = useState("click Me ")

    const bgchange=()=>{
        let chng = "#96ded1"
        change(chng);
        changename('👋 huree!!!')
    };

    return(
        <>
        <div style={{backgroundColor:bg}}>
        <button onDoubleClick={bgchange}>{name}</button>
        </div>

        </>
    )
} 

export default Events;