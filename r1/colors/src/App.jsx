import List from "./components/List";
import "./app.scss";
import * as storage from "./funkcijos/ls";
import Create from "./components/Create";
import { useEffect, useState } from "react";
import Delete from "./components/Delete";
import Edit from "./components/Edit";

const dv = {
  shape: "square",
  color: "#000000",
  range: 1,
};

const KEY = "colors";

export default function App() {
  const [colors, setColor] = useState(null);
  const [refresh, setRefresh] = useState(Date.now());
  const [create, setCreate] = useState(null);
  const [store, setStore] = useState(null);
  const [remove, setRemove] = useState(null); //delete
  const [destroy, setDestroy] = useState(null);
  const [edit, setEdit] = useState(null);
  const [update, setUpdate] = useState(null);

  useEffect(
    (_) => {
      setColor(storage.lsRead(KEY));
    },
    [refresh]
  );

  useEffect(
    (_) => {
      if (store === null) {
        return;
      }
      storage.lsCreate(KEY, store);
      setStore(null);
      setRefresh(Date.now());
    },
    [store]
  );

  useEffect(
    (_) => {
      if (destroy === null) {
        return;
      }
      storage.lsDelete(KEY, destroy.id);
      setDestroy(null);
      setRefresh(Date.now());
    },
    [destroy]
  );

  useEffect(
    (_) => {
      if (update === null) {
        return;
      }
      storage.lsEdit(KEY, update, update.id);
      setUpdate(null);
      setRefresh(Date.now());
    },
    [update]
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="buttons">
              <button
                type="button"
                className="blue"
                onClick={(_) => setCreate(dv)}
              >
                Add new color
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <List colors={colors} setRemove={setRemove} setEdit={setEdit}/>
          </div>
        </div>
      </div>
      {create !== null && (
        <Create setCreate={setCreate} create={create} setStore={setStore} />
      )}
      {remove !== null && (
        <Delete setRemove={setRemove} remove={remove} setDestroy={setDestroy} />
      )}
      {edit !== null && (
        <Edit setEdit={setEdit} edit={edit} setUpdate={setUpdate} />
      )}
    </>
  );
}
