import React from "react";
import "./style.css"

import Button from "./Button"


const App = () => {
    return(
        //you can return only one component(div is a single component)
        //instead of class write className

        <div>
            <h1 style={{textAlign:"Center"}}> Hello World !</h1>
            <Button title="App Store" />
            <Button title="Play Store" />
            {/* <button className="button"> App Store !</button>
            <button className="button"> Play Store !</button> */}
        </div>
    );
};

export default App;