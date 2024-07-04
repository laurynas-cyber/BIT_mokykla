export default function Register() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <header id="header">
            <h3>Registruotis</h3>
          </header>
          <section>
            <header className="main">
              <div className="row aln-center">
                <div className="col-6 col-8-large col-10-medium col-12-small">
                  <form>
                    <div className="row gtr-uniform">
                      <div className="col-12"></div>
                      <div className="col-6 col-12-xsmall">
                        <input
                          type="text"
                          name="name"
                          placeholder="Vardas"
                          autoComplete="username"
                        />
                      </div>
                      <div className="col-6 col-12-xsmall">
                        <input
                          type="email"
                          name="email"
                          placeholder="El. paštas"
                          autoComplete="email"
                        />
                      </div>
                      <div className="col-6 col-12-xsmall">
                        <input
                          type="password"
                          name="psw"
                          placeholder="Slaptažodis"
                          autoComplete="new-password"
                        />
                      </div>
                      <div className="col-6 col-12-xsmall">
                        <input
                          type="password"
                          name="psw2"
                          placeholder="Pakartoti"
                          autoComplete="new-password"
                        />
                      </div>
                      <div className="col-12">
                        <ul className="actions">
                          <li>
                            <input
                              type="button"
                              value="Registruotis"
                              className="primary"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="col-12">
                        <ul className="actions">
                          <li>
                            <a href="/#">Grįžti į pradinį</a>
                          </li>
                          <li>
                            <a href="/#login">Prisijungti</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </header>
          </section>
        </div>
      </div>
    </div>
  );
}
