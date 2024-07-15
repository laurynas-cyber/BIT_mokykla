import { createContext, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ModalContext = createContext();

function Modals({ children }) {
  const [deleteModal, setDeleteModal] = useState(null);

  return (
    <ModalContext.Provider value={{ deleteModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default Modals;
