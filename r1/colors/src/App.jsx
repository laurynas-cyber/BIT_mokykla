import List from "./components/List";
import "./app.scss";
import * as storage from "./funkcijos/ls";
import Create from "./components/Create";
import { useCallback, useEffect, useState } from "react";
import Delete from "./components/Delete";
import Edit from "./components/Edit";
import axios from "axios";
import Messages from "./components/Messages";
import { v4 as uuid4 } from "uuid";

const dv = {
  shape: "",
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
  const [msg, setMsg] = useState([]);

  const remMessage = useCallback((id) => {
    setMsg((msgs) => msgs.filter((m) => m.id !== id));
  }, []);

  const addMessage = useCallback(
    (m) => {
      const id = uuid4();
      setMsg((msgs) => [{ ...m, id }, ...msgs]);
      setTimeout(() => {
        remMessage(id);
      }, 5000);
    },
    [remMessage]
  );

  const getTitle = useCallback(
    (id, color) => {
      axios
        .get(`https://www.thecolorapi.com/id?f&hex=` + color.substring(1))
        .then((res) => {
          const title = res.data.name.value;

          storage.lsEdit(KEY, { title }, id);
          addMessage({
            title: "Api",
            type: "info",
            text: "Color was received",
          });
          setRefresh(Date.now());
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [addMessage]
  );

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
      const id = storage.lsCreate(KEY, store);
      addMessage({
        title: "Colors",
        type: "success",
        text: "Color was created successfully",
      });
      getTitle(id, store.color);
      setStore(null);
      setRefresh(Date.now());
    },
    [store, getTitle, addMessage]
  );

  useEffect(
    (_) => {
      if (destroy === null) {
        return;
      }
      storage.lsDelete(KEY, destroy.id);
      addMessage({
        title: "Colors",
        type: "error",
        text: "Color was deleted successfully",
      });
      setDestroy(null);
      setRefresh(Date.now());
    },
    [destroy, addMessage]
  );

  useEffect(
    (_) => {
      if (update === null) {
        return;
      }
      storage.lsEdit(KEY, update, update.id);
      addMessage({
        title: "Colors",
        type: "success",
        text: "Color was edited successfully",
      });
      getTitle(update.id, update.color);
      setUpdate(null);
      setRefresh(Date.now());
    },
    [update, getTitle, addMessage]
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
            <List colors={colors} setRemove={setRemove} setEdit={setEdit} />
          </div>
        </div>
      </div>
      {create !== null && (
        <Create setCreate={setCreate} create={create} setStore={setStore} addMessage={addMessage} />
      )}
      {remove !== null && (
        <Delete setRemove={setRemove} remove={remove} setDestroy={setDestroy} />
      )}
      {edit !== null && (
        <Edit setEdit={setEdit} edit={edit} setUpdate={setUpdate} />
      )}
      <Messages msg={msg} remMessage={remMessage} />
    </>
  );
}
