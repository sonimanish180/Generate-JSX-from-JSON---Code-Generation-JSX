import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <>
            <clock root = "true" style = {{"display" : "flex", "flex-direction" : "row", "justify-content" : "center"}}>
                <hour></hour>                
                <minute style = {{"color" : "green", "font-size" : 30}}></minute>
            </clock>
               
            </>
        )
    }
}


export default App;
