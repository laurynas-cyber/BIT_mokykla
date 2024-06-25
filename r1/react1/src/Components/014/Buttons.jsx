import { useContext } from "react";
import { CounterContext } from "./Counter";

function Buttons() {
  return <h2>Sub Buttons</h2>;
}

export default Buttons;

const Blue = (_) => {
  const { counter, add } = useContext(CounterContext);

  return (
    <div className="buttons">
      <button type="button" className="blue" onClick={add}>
        ADD ({counter})
      </button>
    </div>
  );
};

const Yellow = (_) => {
  const { counter, add } = useContext(CounterContext);

  return (
    <div className="buttons">
      <button type="button" className="yellow" onClick={add}>
        ADD ({counter})
      </button>
    </div>
  );
};

Buttons.Blue = Blue;
Buttons.Yellow = Yellow;
