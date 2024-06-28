import { createContext } from "react";
import useCreate from "../Hooks/useCreate";

export const DataContext = createContext();

const dv = {
  shape: "",
  color: "#04724d",
  range: 1,
};

const serverUrl = "http://localhost:3001/";

export const Data = ({ children }) => {
  const { create, setCreate, setStore } = useCreate(serverUrl);

  return (
    <DataContext.Provider value={{ create, setCreate, setStore, dv }}>
      {children}
    </DataContext.Provider>
  );
};
