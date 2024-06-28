import React from "react";
import { DataContext } from "../Contexts/DataContext";
import { useContext } from "react";

function CreateButtons() {
  const { setCreate, dv } = useContext(DataContext);

  return (
    <div className="buttons">
      <button type="button" className="blue" onClick={(_) => setCreate(dv)}>
        Add new color
      </button>
    </div>
  );
}

export default CreateButtons;
