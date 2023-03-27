import { useState } from "react";
import Card from "./components/Card";
import data from "./data/html.json"
import "./App.css";

function App() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="App">
      <h1>Frontend Cards</h1>
      <Card sideA={data[0].sideA} sideB={data[0].sideB} flipped={flipped}/>
      <button className="action-button" onClick={() => setFlipped(prev => !prev)}>Flip card</button>
      <button className="action-button">Next card</button>
    </div>
  );
}

export default App;
