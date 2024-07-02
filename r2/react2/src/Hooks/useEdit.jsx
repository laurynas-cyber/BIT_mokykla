import { useEffect, useState } from "react";
import axios from "axios";
import { editColor,hideId, removeHidden, showHidden } from "../Actions/ColorsActions";

const useEdit = (serverUrl, dispachColors, addMessage) => {
  const [edit, setEdit] = useState(null); // delete
  const [update, setUpdate] = useState(null);

  useEffect(
    (_) => {
      if (null === update) {
        return;
      }
      dispachColors(editColor(update))
      addMessage({
        title: "Colors",
        type: "info",
        text: "Editing new color...",
      });
      axios
        .put(`${serverUrl}colors/${update.id}`, update)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            addMessage(res.data.msg);
          } else {
          }
        })
        .catch((error) => {
          console.log(error);

          addMessage({ title: "Colors", type: "error", text: "Server error" });
        });
      setUpdate(null);
    },
    [update, serverUrl, addMessage, dispachColors]
  );

  return { edit, setEdit, setUpdate };
};

export default useEdit;
