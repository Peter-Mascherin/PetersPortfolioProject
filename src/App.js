import "./App.css";
import { useState } from "react";
import MyNavbar from "./MyNavbar";

function App() {
  return (
    <div className="container-fluid p-0">
      <MyNavbar />
    </div>
    //i know the fix to this, its the two divs surrounding it, fix needed
  );
}

export default App;
