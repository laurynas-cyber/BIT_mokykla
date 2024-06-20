import { useContext } from "react";
import { ButtonContext, RangeContext } from "../../App";

function A() {
  const { color, counter } = useContext(ButtonContext);
  const range = useContext(RangeContext);

  return (
    <button
      type="button"
      className={color}
      onClick={(_) => counter((c) => c + range)}
    >
      Button
    </button>
  );
}

export default A;
