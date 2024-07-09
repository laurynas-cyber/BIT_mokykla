import { useEffect, useState } from "react";
import useServerPost from "../../Hooks/useServerPost";
import * as l from "../../Constants/urls";

export default function Register() {
  const defaultValues = {
    name: "",
    email: "",
    psw: "",
    psw2: "",
  };

  const { doAction, response } = useServerPost(l.SERVER_REGISTER);

  const [form, setForm] = useState(defaultValues);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(
    (_) => {
      if (null === response) {
        return;
      }
      setButtonDisabled(false); //disable button tam kad neprispaudinetu useris.
      if (response.type === "success") {
        window.location.hash = l.REDIRECT_AFTER_REGISTER;
      }
    },
    [response]
  );

  const handleForm = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setButtonDisabled(true);
    //TODO validations
    doAction({
      name: form.name,
      email: form.email,
      psw: form.psw,
    });
  };

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
                          onChange={handleForm}
                          value={form.name}
                          type="text"
                          name="name"
                          placeholder="Vardas"
                          autoComplete="username"
                        />
                      </div>
                      <div className="col-6 col-12-xsmall">
                        <input
                          onChange={handleForm}
                          value={form.email}
                          type="email"
                          name="email"
                          placeholder="El. paštas"
                          autoComplete="email"
                        />
                      </div>
                      <div className="col-6 col-12-xsmall">
                        <input
                          onChange={handleForm}
                          value={form.psw}
                          type="password"
                          name="psw"
                          placeholder="Slaptažodis"
                          autoComplete="new-password"
                        />
                      </div>
                      <div className="col-6 col-12-xsmall">
                        <input
                          onChange={handleForm}
                          value={form.psw2}
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
                              onClick={handleSubmit}
                              type="button"
                              value="Registruotis"
                              className="primary"
                              disabled={buttonDisabled}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="col-12">
                        <ul className="actions">
                          <li>
                            <a href={"/" + l.SITE_HOME}>Grįžti į pradinį</a>
                          </li>
                          <li>
                            <a href={"/" + l.SITE_LOGIN}>Prisijungti</a>
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
