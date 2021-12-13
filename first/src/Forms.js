import React, { useState } from "react";

const Forms=()=>{
    const [name, setname]= useState(" ");
    const [FullName, setFullname] = useState(" ");

    const InputEvent=(events)=> {
        // console.log(events.target.value);
        setname(events.target.value);
    };

    const submit=()=>{
        setFullname(name);
    };

    return(
        <>
        <div>
        <h4> hello { FullName}</h4>
        <input type="text" placeholder="Enter your name" onChange={InputEvent} value={name} />
        <button onClick={submit}> Click Me</button>
        </div>
        </>
    );
}
export default Forms;


