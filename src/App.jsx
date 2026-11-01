import { use, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import TestComponent from "./TestComponent";
import Counter from "./components/Counter";
import Display from "./components/Display";
import { CounterContext } from "./provider/Counter.provider";

// const members = [
//   { name: "jahid", age: 12 },
//   { name: "shahid", age: 50 },
//   { name: "ahid", age: 67 },
//   { name: "mahid", age: 45 },
// ];

function App() {
  const { count, setCount } = use(CounterContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [members, setMembers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMemvers = { name, age };
    // setMembers([...members, newMemvers]);
    setMembers((prev) => [...prev, newMemvers]);
    setName("");
    setAge("");
  };
  return (
    <>
      <Counter count={count} setCount={setCount}></Counter>
      <Display count={count}></Display>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <input type="submit" value="Submit" />
      </form>
      <TestComponent></TestComponent>
      {members.map((member) => (
        <Card name={member.name} age={member.age}></Card>
      ))}
    </>
  );
}

export default App;
