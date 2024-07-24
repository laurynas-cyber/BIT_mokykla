import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/Auth";
import * as l from "../../Constants/urls";
import useServerPost from "../../Hooks/useServerPost";
import { LoaderContext } from "../../Contexts/Loader";

const Logout = () => {
  const { doAction, serverResponse } = useServerPost(l.SERVER_LOGOUT);

  const { user, removeUser } = useContext(AuthContext);

  const { setShow } = useContext(LoaderContext);

  useEffect(
    (_) => {
      if (null === serverResponse) {
        return;
      }
      if (serverResponse.type === "success") {
        removeUser();
        window.location.hash = l.SITE_LOGIN;
      }
    },
    [serverResponse, removeUser]
  );

  return (
    <button className="link">
      <span className="label" onClick={(_) => doAction() || setShow(true)}>
        Atsijungti, {user.name}
      </span>
    </button>
  );
};

export default Logout;
