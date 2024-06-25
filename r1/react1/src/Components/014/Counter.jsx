import { createContext, useState } from "react";

export const CounterContext = createContext();

function Counter({ children }) {
  const [counter, SetCounter] = useState(0);

  const add = (_) => {
    SetCounter((c) => {
      if (c >= 9) {
        return 0;
      }
      return c + 1;
    });
  };
  return (
    <CounterContext.Provider value={{ counter, add }}>
      {children}
    </CounterContext.Provider>
  );
}

export default Counter;
