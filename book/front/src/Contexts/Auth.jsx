import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

function Auth({ children }) {
  const [user, setUser] = useState((_) => {
    const user = localStorage.getItem("bookUser");
    return user ? JSON.parse(user) : null;
  });

  const addUser = useCallback((user) => {
    setUser(user);
    localStorage.setItem("bookUser", JSON.stringify(user));
  }, []);

  const removeUser = useCallback((_) => {
    setUser(null);
    localStorage.removeItem("bookUser");
  }, []);

  return (
    <AuthContext.Provider value={{ user, addUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
