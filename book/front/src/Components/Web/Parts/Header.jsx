function Header() {
  return (
    <header id="header">
      <a href="index.html" className="logo">
        <strong>Raudonoji knyga</strong> by HTML5 UP
      </a>
      <ul className="icons">
        <li>
          <a href="/#login">
            <span className="label">Prisijungti</span>
          </a>
        </li>
        <li>
          <a href="/#register">
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
