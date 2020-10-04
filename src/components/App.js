import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let app = document.getElementById("root");
    let clock = document.createElement("Clock");

    clock.setAttribute(("root", "true"));
    clock.style.display = "flex";
    clock.style.flexDirection = "row";
    clock.style.justifyContent = "center";

    app.appendChild(clock);

    let hour = document.createElementFragment("Hour");

    let minute = document.createElement("Minute");

    minute.style.color = "green";
    minute.style.fontSize = 30;

    clock.appendChild(hour);
    clock.appendChild(minute);

    return app;
  }
}
