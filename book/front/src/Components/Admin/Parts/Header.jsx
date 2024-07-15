import * as l from "../../../Constants/urls";

function Header() {
  return (
    <header id="header">
      <a href="index.html" className="logo">
        <strong>Administravimas</strong> by HTML5 UP
      </a>
      <ul className="icons">
        <li>
          <a href={l.SITE_LOGIN}>
            <span className="label">Atsijungti</span>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
