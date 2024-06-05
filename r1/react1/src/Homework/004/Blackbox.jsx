import "./trees.scss";
import { useState } from "react";

function Blackbox() {
  const [count, setCount] = useState(0);

  const add1 = (_) => {
    setCount((Oldcount) => Oldcount + 1);
  };
  return (
    <div className="blcksq">
      <button onClick={add1}>+</button>
      <span>{count}</span>
    </div>
  );
}

export default Blackbox;
