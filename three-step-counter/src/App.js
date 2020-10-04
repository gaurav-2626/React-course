import React, {useState} from "react";

import "./App.css" ;

function App(){
  //never change a state variable directly
  //set count is used to change the variable
  //initial value of count is given inside the bracket.
  const [count,setCount] = useState(0)
  //declaring variables.
  //val , setVal

   return(
     <div className = "App">
        <header>
            <h1>
              Counter app using State/hooks
            </h1>
        </header>
   <h2>Current value of count is {count}</h2>
   <button onClick={() => setCount(0)}> Reset Counter</button>
   <button onClick={() => count > 10 ? "" : setCount(count + 1)}> Increase Counter</button> 
   <button onClick={() => count < -10 ? "" : setCount(count - 1)}> Decrease Counter</button> 

     </div>
   )
}

export default App;