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
        {/* <!-- Search --> */}
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section>

        <Menu />
        {/* <!-- Section --> */}
        <section>
          <header className="major">
            <h2>Ante interdum</h2>
          </header>
          <div className="mini-posts">
            <article>
              <a href="/#" className="image">
                <img src="images/pic07.jpg" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src="images/pic08.jpg" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src="images/pic09.jpg" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
          </div>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                More
              </a>
            </li>
          </ul>
        </section>

        {/* <!-- Section --> */}
        <section>
          <header className="major">
            <h2>Get in touch</h2>
          </header>
          <p>
            Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit
            lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam
            facilisis ante interdum. Sed nulla amet lorem feugiat tempus
            aliquam.
          </p>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="/#">information@untitled.tld</a>
            </li>
            <li className="icon solid fa-phone">(000) 000-0000</li>
            <li className="icon solid fa-home">
              1234 Somewhere Road #8254
              <br />
              Nashville, TN 00000-0000
            </li>
          </ul>
        </section>

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
