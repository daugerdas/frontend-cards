import './Card.css';

function Card(props) {
  const { sideA, sideB, flipped } = props;

  return (
    <div className="card-container">
        <div className={`card-content ${flipped ? "flipped" : "not-flipped"}`}>
            <div className="sideA"><h1>{sideA}</h1></div>
            <div className="sideB">{sideB}</div>
        </div>
    </div>
  );
}

export default Card;