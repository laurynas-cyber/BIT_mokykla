import { useContext } from "react";
import { CounterContext } from "./Counter";

function Button1() {
  const { counter, add } = useContext(CounterContext);

  return (
    <div className="buttons">
      <button type="button" className="green" onClick={add}>
        ADD ({counter})
      </button>
    </div>
  );
}

export default Button1;
