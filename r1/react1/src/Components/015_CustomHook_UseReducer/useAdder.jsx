//custom hookas negrazina nieko is html bet jie yra reacto dalis

import { useState } from "react";

function useAdder(start) {
  const [count, setCount] = useState(start);

  const add1 = (_) => {
    setCount((c) => c + 1);
  };

  const add10 = (_) => {
    setCount((c) => c + 10);
  };

  return [count, add1, add10];
}

export default useAdder;
