import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Frontend Cards</h1>
      <Card />
      <button className="action-button">Flip card</button>
      <button className="action-button">Next card</button>
    </div>
  );
}

export default App;
