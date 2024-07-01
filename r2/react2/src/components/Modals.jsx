import { useContext } from "react";
import Create from "./Create";
import { DataContext } from "../Contexts/DataContext";

function Modals() {
  const { create } = useContext(DataContext);

  if (create) {
    return <Create />;
  }

  return null;
}

export default Modals;
