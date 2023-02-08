import "./App.css";

function App() {
  const checkalert = () => {
    alert("this all works");
  };

  return (
    <div className="container">
      <p>hello portfolio</p>
      <button className="btn btn-primary" onClick={() => checkalert()}>
        Alert time
      </button>
    </div>
  );
}

export default App;
