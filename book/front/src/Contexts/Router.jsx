import { createContext, useCallback, useEffect, useState } from "react";
import Page404 from "../Components/Common/Page404";
import Home from "../Components/Web/Home";
import Web from "../Components/Web/Parts/Layout";
import Register from "../Components/Common/Register";
import Login from "../Components/Common/Login";

const RouterContext = createContext([]); //skliaustuose pradine reiksme jeigu pradetu rekti, kad kazkas netinka

const Bebras = (_) => {
  return (
    <div>
      <h1>Bebras</h1>
      <a href="/#bebras/22">Bebras</a>
      <a href="/#zebras/22">Zebras</a>
      <a href="/#">Home</a>
    </div>
  );
};

const Zebras = (_) => {
  return (
    <div>
      <h1>Zebras</h1>
      <a href="/#bebras/22">Bebras</a>
      <a href="/#zebras/22">Zebras</a>
      <a href="/#">Home</a>
    </div>
  );
};
const Router = (_) => {
  const [route, setRoute] = useState("");
  const [params, setParams] = useState([]);

  const handleHashChange = useCallback(
    (_) => {
      const hash = window.location.hash.split("/");
      console.log(hash);
      hash[0] || (hash[0] = "#");
      setRoute(hash.shift());
      setParams(hash);
    },
    [setRoute, setParams]
  );

  useEffect(
    (_) => {
      const hash = window.location.hash.split("/"); //nuskaitom hasho eilute

      hash[0] || (hash[0] = "#"); //kai pirma kart uzlaudima mes neturim hasho
      setRoute(hash.shift()); //isimam pirma elementa is masyvo, tam kad liktu tiktai parametrai

      setParams(hash); // idedam i parametrus

      window.addEventListener("hashchange", handleHashChange); //event listeneri kai pasikeis hasshas # pasileis funkcija

      return (_) => window.removeEventListener("hashchange", handleHashChange);
    },
    [handleHashChange]
  );

  const routes = [
    { path: "", pc: 0, component: null },
    {
      path: "#",
      pc: 0,
      component: (
        <Web>
          <Home />
        </Web>
      ),
    },
    {
      path: "#bebras",
      pc: 0,
      component: (
        <Web>
          <Bebras />
        </Web>
      ),
    },
    {
      path: "#zebras",
      pc: 0,
      component: (
        <Web>
          <Zebras />
        </Web>
      ),
    },
    {
      path: "#register",
      pc: 0,
      component: <Register />,
    },
    {
      path: "#login",
      pc: 0,
      component: <Login />,
    },
  ]; // pc parametru skaicius

  const routeComponent = routes.find(
    (r) => r.path === route && r.pc === params.length
  )?.component ?? <Page404 />;

  return (
    <RouterContext.Provider value={params}>
      {routeComponent}
    </RouterContext.Provider>
  );
};

export { RouterContext, Router };