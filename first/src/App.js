import './App.css';
import {add, sub, multi,Div} from "./Calc";


function App() {
  return (
    <>
    <ol> CALC
    <li> Sum of two number is:{add (3,5)} </li>
    <li> subtract of two number is:{sub (5,3)} </li>
    <li> Multiplication of two number is:{multi (3,5)} </li>
    <li> Division of two number is:{Div (10,2)} </li>
    </ol>
    </>
  );
}

export default App;
