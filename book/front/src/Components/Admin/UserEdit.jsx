import { useContext } from "react";
import { RouterContext } from "../../Contexts/Router";

function UserEdit() {
  const { params } = useContext(RouterContext);

  console.log(params);

  return (
    <>
      <section id="banner">
        <div className="content">
          <header>
            <h1>Vartotojų redagavimas</h1>
          </header>
        </div>
      </section>

      <section></section>
    </>
  );
}

export default UserEdit;
