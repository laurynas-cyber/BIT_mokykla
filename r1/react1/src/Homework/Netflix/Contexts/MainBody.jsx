import { createContext } from "react";
export const MainContext = createContext();
function MainBody({ children }) {
  return (
    <MainContext.Provider>
      <body>{children}</body>
    </MainContext.Provider>
  );
}

export default MainBody;
