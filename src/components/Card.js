import './Card.css';

function Card(props) {
  const { sideA, sideB, flipped } = props;

  return (
    <div className="card">
      <div className="card-text">{flipped ? sideB : sideA}</div>
    </div>
  );
}

export default Card;