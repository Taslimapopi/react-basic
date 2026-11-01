import "./card.css";

export default function Card({ name, age }) {
  return (
    <div className="card">
      <p>name: {name}</p>
      <p>Age : {age}</p>
    </div>
  );
}
