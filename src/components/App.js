import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <>
            <Clock root = "true" style = {{"display" : "flex", "flex-direction" : "row", "justify-content" : "center"}}>
                <Hour></hour>                
                <Minute style = {{"color" : "green", "font-size" : 30}}></Minute>
            </Clock>
               
            </>
        )
    }
}


export default App;


