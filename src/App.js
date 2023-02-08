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
  );
}

export default App;
