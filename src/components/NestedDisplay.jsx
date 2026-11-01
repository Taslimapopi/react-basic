import { use } from "react";
import "./card.css";
import { CounterContext } from "../provider/Counter.provider";

export default function NestedDisplay() {
  const { count } = use(CounterContext);
  return (
    <div className="card-orange">
      <p>GrandChild</p>
      <h2>This is nested Display</h2>
      <h3>{count}</h3>
    </div>
  );
}
