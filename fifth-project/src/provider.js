import React,{useState} from "react";

//bring in the context
import PackageContext from "./context"

const Provider = props => {
  //states
  const [mission,setMission] = useState({
    mname : "Go to Russia",
    agent : "007",
    accept : "Not Accepted"
  })

  return(
    //all the values are stored in one place 
    //this will be used by the consumer
    //this is a standard method to create a provider
    <PackageContext.Provider
    value={{
      //as many data that you want
      data: mission,
      //as many callbacks as you want
      isMissionAccepted : () =>{
        setMission({...mission,accept:"ACCEPTED"})
      }
    }}
    >
      {props.children}
    </PackageContext.Provider>
  )
}

export default Provider
