import "./App.css";
import { useState } from "react";

function App() {
  const [startdata, setStartdata] = useState(0);

  const checkalert = () => {
    alert(`current state number is ${startdata}`);
  };

  return (
    <div className="container">
      <p>hello portfolio</p>
      <button className="btn btn-primary" onClick={() => checkalert()}>
        Alert time
      </button>
      <input
        className="formControl"
        type="number"
        value={startdata}
        onChange={(e) => setStartdata(e.target.value)}
      ></input>
    </div>
  );
}

export default App;
