import React,{Fragment} from "react"

import Provider from "./provider"
import Context from "./context"

// as we can see the props are not passes deep
//it is just used at the end node of the tree.
//any doubt check the problem.js for understanding the problem
const Agents = () =>{
  return <AgentOne />
}

const AgentOne = () =>{
  return <AgentTwo />
}

const AgentTwo = () =>{
  return <AgentBond />
}

const AgentBond = () =>{
  return(
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            {
              //this is a standard callback 
              //need to memorize this callback
            }
            <h3>
              Agent Information
              <p>
                Mission Name : {context.data.mname}
              </p>
              <p>
                Mission Status : {context.data.accept}
              </p>
              <button onClick={context.isMissionAccepted}>
                Choose to accpet
              </button>
            </h3>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}

const App = () => {
  return (
    <div>
      <h1>
        Context API
      </h1>
      {//wrap it with provider wherever you want to use the context
      }
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App;