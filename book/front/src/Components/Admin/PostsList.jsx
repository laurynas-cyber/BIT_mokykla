import useServerGet from "../../Hooks/useServerGet";
import * as l from "../../Constants/urls";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import useServerDelete from "../../Hooks/useServerDelete";
import { ModalContext } from "../../Contexts/Modals";
import useServerPut from "../../Hooks/useServerPut";
import { LoaderContext } from "../../Contexts/Loader";

export default function PostsList() {
  const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(
    l.SERVER_GET_POSTS
  );
  const { doAction: doDelete, serverResponse: serverDeleteResponse } =
    useServerDelete(l.SERVER_DELETE_POST);
  const { doAction: doPut, serverResponse: serverPutResponse } = useServerPut(
    l.SERVER_CHANGE_POST_TOP
  );
  const { setDeleteModal } = useContext(ModalContext);
  const [posts, setPosts] = useState(null);
  const { setShow } = useContext(LoaderContext);

  const hidePost = (post) => {
    setPosts((p) =>
      p.map((p) => (p.id === post.id ? { ...p, hidden: true } : p))
    );
  };

  const showPost = useCallback((_) => {
    setPosts((p) =>
      p.map((p) => {
        delete p.hidden;
        return p;
      })
    );
  }, []);

  const removeHidden = useCallback((_) => {
    setPosts((p) => p.filter((p) => !p.hidden));
  }, []);

  useEffect(
    (_) => {
      doGet();
    },
    [doGet]
  );

  const oldTopId = useRef(null);
  useEffect(
    (_) => {
      if (null === serverGetResponse) {
        return;
      }
      setPosts(serverGetResponse.serverData.posts ?? null);
      oldTopId.current =
        serverGetResponse.serverData.posts.find((p) => p.is_top === 1)?.id ??
        null;
    },
    [serverGetResponse]
  );

  useEffect(
    (_) => {
      if (null === serverDeleteResponse) {
        return;
      }
      if (serverDeleteResponse.type === "error") {
        showPost();
      } else {
        removeHidden();
      }
    },
    [serverDeleteResponse, showPost, removeHidden]
  );

  useEffect(
    (_) => {
      if (null === serverPutResponse) {
        return;
      }
      if (serverPutResponse.type === "error") {
        setPosts((p) =>
          p.map((p) =>
            p.id === oldTopId.current
              ? { ...p, is_top: 1 }
              : { ...p, is_top: 0 }
          )
        );
      } else {
        oldTopId.current = serverPutResponse.serverData.newID;
      }
    },
    [serverPutResponse, oldTopId]
  );

  const makeTop = (post) => {
    setPosts((p) =>
      p.map((p) =>
        p.id === post.id ? { ...p, is_top: 1 } : { ...p, is_top: 0 }
      )
    );
    setShow(true);
    doPut({ id: post.id });
  };

  return (
    <>
      <section id="banner">
        <div className="content">
          <header>
            <h1>Straipsnių sąrašas</h1>
          </header>
        </div>
      </section>
      <section>
        {posts === null && <h3>Palaukite, siunčiamas straipsnių sąrašas...</h3>}
        {posts !== null && (
          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Pavadinimas</th>
                  <th>Nuotrauka</th>
                  <th>Ar pagrindinis</th>
                  <th>Veiksmai</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p) =>
                  p.hidden ? null : (
                    <tr key={p.id}>
                      <td>{p.title}</td>
                      <td>
                        {" "}
                        {p.photo === null ? (
                          <img
                            src={l.SERVER_IMAGES_URL + "no-image.png"}
                            alt="nėra nuotraukos"
                            style={{ height: "70px", width: "auto" }}
                          />
                        ) : (
                          <img
                            style={{ height: "70px", width: "auto" }}
                            src={l.SERVER_IMAGES_URL + p.photo}
                            alt={p.title}
                          />
                        )}
                      </td>
                      <td>
                        {p.is_top ? (
                          <b>"Pagrindinis"</b>
                        ) : (
                          <input
                            type="button"
                            className="small"
                            value="Padaryti pagrindiniu"
                            onClick={(_) => makeTop(p)}
                          />
                        )}
                      </td>
                      <td className="two">
                        <ul className="actions special">
                          <li>
                            <a
                              href={l.POST_EDIT + "/" + p.id}
                              className="button small"
                            >
                              redaguoti
                            </a>
                          </li>
                          <li>
                            <input
                              onClick={(_) =>
                                setDeleteModal({
                                  data: p,
                                  doDelete,
                                  hideData: hidePost,
                                })
                              }
                              type="button"
                              value="ištrinti"
                              className="small"
                            />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>
                    Viso straipsnių: {posts.filter((p) => !p.hidden).length}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </section>
    </>
  );
}
