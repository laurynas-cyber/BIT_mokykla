import * as l from "../../../Constants/urls";

function Header() {
  return (
    <header id="header">
      <a href="index.html" className="logo">
        <strong>Raudonoji knyga</strong> by HTML5 UP
      </a>
      <ul className="icons">
        <li>
          <a href={l.SITE_LOGIN}>
            <span className="label">Prisijungti</span>
          </a>
        </li>
        <li>
          <a href={l.SITE_REGISTER}>
            <span className="label">Registruoti</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-user"></a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
