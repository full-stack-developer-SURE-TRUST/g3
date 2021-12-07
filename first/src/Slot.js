import React from "react";
import "./index.css";

const SlotM = (props)=>{
    let {x,y,z} = props;
    if ((x===y) && (y===z)){
    return(
        <>
        <div className="card">
            <h1> {x}{y}{z}</h1>
            <h1> This is Maching!</h1>
            <hr></hr>
        </div>
        </>
    );
    }else{ return(
            <>
            <div className="card">
            <h1> {x}{y}{z}</h1>
            <h1> This is not  Maching! </h1>
            <hr></hr>
        </div>

            </>
        );
    }
}

const Slot=() =>{
    return(
        <>
        {/* <h2 className="heading"> welcome to emoji Maching Game!</h2> */}
        <div>
            <SlotM x="🤩" y="🤩" z="🤩" />
            <SlotM x="🤩" y="👽 "z="🤩" />
            <SlotM x="🤩" y="🤩" z="👽" />
            <SlotM x="😻" y="😻" z="😻" />
        </div>
        </>
    );
}

export default Slot;