import { useEffect, useReducer } from "react";
import axios from "axios";
import colorsReducer from "../Reducers/ColorsReducer";
import { read } from "../Actions/ColorsActions";

const useRead = (serverUrl) => {
  const [colors, dispatchColors] = useReducer(colorsReducer, null);

  useEffect((_) => {
    axios
      .get(`${serverUrl}colors`, colors)
      .then((res) => {
        console.log(res);
        dispatchColors(read(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
    // setStore(null);
  }, []);

  return { colors };
};

export default useRead;
