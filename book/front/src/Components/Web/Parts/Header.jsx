import { useContext } from "react";
import * as l from "../../../Constants/urls";
import { AuthContext } from "../../../Contexts/Auth";

function Header() {
  const { user } = useContext(AuthContext);
  return (
    <header id="header">
      <a href="index.html" className="logo">
        <strong>Raudonoji knyga</strong> by HTML5 UP
      </a>
      <ul className="icons">
        {user ? (
          <li>
            <button className="link">
              <span className="label">Atsijungti, {user.name}</span>
            </button>
          </li>
        ) : (
          <>
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
          </>
        )}

        <li>
          <a href={l.SITE_DASHBORD}>
            <span className="label">Laikinas ADMIN</span>
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
