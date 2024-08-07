import { useRef } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import { useState } from "react";

function SideBar({ webContent }) {
  const sidebar = useRef();

  const [showSideBar, setShowSideBar] = useState(true);

  const contacts = webContent?.find((c) => c.name === "contacts")?.value;

  function toogleSideBar() {
    setShowSideBar(!showSideBar);
  }

  return (
    <div id="sidebar" ref={sidebar} className={showSideBar ? null : "inactive"}>
      <div className="inner">
        {/* <!-- Search --> */}
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section>

        <Menu />
        {/* <!-- Section --> */}

        {contacts && (
          <section>
            <header className="major">
              <h2>{contacts.title}</h2>
            </header>
            <p>{contacts.about}</p>
            <ul className="contact">
              <li className="icon solid fa-envelope">
                <a href="/#">{contacts.email}</a>
              </li>
              <li className="icon solid fa-phone">{contacts.phone}</li>
              <li className="icon solid fa-home">{contacts.address}</li>
            </ul>
          </section>
        )}

        {/* <!-- Footer --> */}
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
