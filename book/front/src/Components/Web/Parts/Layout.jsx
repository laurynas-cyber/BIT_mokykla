import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import useServerGet from "../../../Hooks/useServerGet";
import * as l from "../../../Constants/urls";

function Layout({ children }) {
  const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(
    l.GET_WEB_CONTENT
  );
  const [webContent, setWebContent] = useState(null);

  useEffect(
    (_) => {
      doGet();
    },
    [doGet]
  );

  useEffect(
    (_) => {
      if (null === serverGetResponse) {
        return;
      }

      if (serverGetResponse.type === "success") {
        setWebContent(
          serverGetResponse.serverData.content.map((c) => ({
            ...c,
            value: JSON.parse(c.value),
          }))
        );
      }
    },
    [serverGetResponse]
  );

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header webContent={webContent} />

          {children}
        </div>
      </div>

      <SideBar webContent={webContent} />
    </div>
  );
}

export default Layout;
