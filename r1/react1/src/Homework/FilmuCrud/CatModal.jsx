import { useState } from "react";
import { toast } from "react-toastify";
import Toast from "./Toast";

function CatModal({ setShowModal, setData }) {
  const [select, setSelect] = useState(1);
  //   const [select, setSelect] = useState(3);

  const categories = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Action" },
    { id: 3, name: "Fantasy" },
    { id: 4, name: "Animation" },
    { id: 5, name: "Horror" },
    { id: 6, name: "Documentary" },
  ];

  const handleData = (e) => {
    setData((d) => ({ ...d, id: select, name: categories[select - 1].name }));
    toast.success("Category added successfully");
    setShowModal(false);
  };

  const handelSelect = (e) => {
    setSelect(+e.target.value);
  };
  return (
    <div className="backgroundModal">
      <div className="addCat">
        <h1 className="UAB"> Add new Categorie</h1>
        <select value={select} onChange={handelSelect}>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <div className="buttons">
          <button onClick={handleData} type="button" className="blue">
            Create Categorie
          </button>
          <button
            onClick={(_) => setShowModal(false)}
            type="button"
            className="yellow"
            style={{ border: "1px #2191fb solid" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CatModal;
