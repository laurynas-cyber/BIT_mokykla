import React from "react";
import { FooterList } from "../Data/SectionText";
import LanguageInput from "./LanguageInput";



function Footer() {
  return (
    <section>
      <footer className="footerContainer">
        <div className="ContactUs">Questions? Contact us.</div>
        <div className="listContainer">
          {FooterList.map((l, i) => (
            <ul className="list" key={i}>
              {l.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ))}
        </div>

        <LanguageInput />
        <p>Netflix Lithuania</p>
      </footer>
    </section>
  );
}

export default Footer;
