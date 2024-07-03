import { createContext, useState } from "react";

const RouterContext = createContext([]); //skliaustuose pradine reiksme jeigu pradetu rekti, kad kazkas netinka

function Router() {
  const [route, setRoute] = useState("");
  const [params, setParams] = useState([])

  return (
    <RouterContext.Provider value={[]}>
      <h1>Router Context</h1>
    </RouterContext.Provider>
  );
}

export { RouterContext, Router };
