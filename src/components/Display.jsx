import "./card.css";
import NestedDisplay from "./NestedDisplay";

export default function Display() {
  return (
    <div className="card-green">
      <p>ChildComponent</p>
      <NestedDisplay></NestedDisplay>
    </div>
  );
}
