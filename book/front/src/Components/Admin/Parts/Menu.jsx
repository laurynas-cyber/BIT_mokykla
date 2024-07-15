import * as l from "../../../Constants/urls";

function Menu() {
  return (
    <nav id="menu">
      <header className="major">
        <h2>Menu</h2>
      </header>
      <ul>
        <li>
          <a href={l.SITE_DASHBORD}>Dashbordas</a>
        </li>
        <li>
          <a href={l.USERS_LIST}>Vartotojai</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
