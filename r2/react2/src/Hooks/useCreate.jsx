import { useState, useEffect } from "react";
import axios from "axios";

const useCreate = (serverUrl) => {
  //custom hookas
  const [create, setCreate] = useState(null);
  const [store, setStore] = useState(null);

  useEffect(
    (_) => {
      if (store === null) {
        return;
      }
      axios
        .post(`${serverUrl}colors`, store)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setStore(null);
    },
    [store, serverUrl]
  );

  return { create, setCreate, setStore };
};

export default useCreate;
