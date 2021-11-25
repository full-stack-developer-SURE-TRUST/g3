import Third from "./Thirt";
import {name} from "./Props";

function Second(){
    return(
        <>
        <Third />
        <p> Hey, What is your name?</p>
        <p>{name}</p>
        </>

    )
}
export default Second;