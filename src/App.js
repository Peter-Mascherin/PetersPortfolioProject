import "./App.css";
import { useState } from "react";
import MyNavbar from "./MyNavbar";

function App() {
  return (
    <div className="wrapper-div">
      <div className="container-fluid" id="rootcontainer">
        <MyNavbar />
      </div>
    </div>
    //i know the fix to this, its the two divs surrounding it, fix needed
  );
}

export default App;
