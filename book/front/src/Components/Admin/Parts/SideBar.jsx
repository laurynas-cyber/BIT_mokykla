import { useRef } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import { useState } from "react";

function SideBar() {
  const sidebar = useRef();

  const [showSideBar, setShowSideBar] = useState(true);

  function toogleSideBar() {
    setShowSideBar(!showSideBar);
  }

  return (
    <div id="sidebar" ref={sidebar} className={showSideBar ? null : "inactive"}>
      <div className="inner">
        <Menu />

        <Footer />
      </div>
      <span
        href="/#"
        className="toggle"
        style={{ cursor: "pointer" }}
        onClick={toogleSideBar}
      >
        Toggle
      </span>
    </div>
  );
}

export default SideBar;
