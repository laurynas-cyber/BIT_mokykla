import { createContext } from "react";


const MainContext = createContext();
function MainBody({ children }) {

  return (
    <MainContext.Provider value={[]}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainBody };
