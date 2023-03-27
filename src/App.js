import { useState } from "react";
import Card from "./components/Card";
import data from "./data/html.json"
import "./App.css";

function App() {
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <h1>Frontend Cards</h1>
      <Card sideA={data[index].sideA} sideB={data[index].sideB} flipped={flipped}/>
      <button className="action-button" onClick={() => setFlipped(prev => !prev)}>Flip card</button>
      <button className="action-button" onClick={() => setIndex(Math.floor(Math.random() * data.length))}>Next card</button>
    </div>
  );
}

export default App;
