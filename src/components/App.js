import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <>
            <Clock root = "true" style = {{display : "flex", flexDirection : "row", justifyContent : "center"}}>
                <Hour/>                
                <Minute style = {{color : "green", fontSize : 30}}>Make Changes</Minute>
            </Clock>
               
            </>
        )
    }
}


export default App;


