import { createContext, useReducer } from "react";
import useCreate from "../Hooks/useCreate";
import useRead from "../Hooks/useRead";

export const DataContext = createContext();

const dv = {
  shape: "",
  color: "#04724d",
  range: 1,
};

const serverUrl = "http://localhost:3001/";

export const Data = ({ children }) => {
  const { colors } = useRead(serverUrl);
  const { create, setCreate, setStore } = useCreate(serverUrl);

  return (
    <DataContext.Provider value={{ create, setCreate, setStore, dv, colors }}>
      {children}
    </DataContext.Provider>
  );
};
