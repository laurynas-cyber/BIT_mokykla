import Messages from "./Contexts/Messages";
import Msg from "./Components/Common/Msg";
import { Router } from "./Contexts/Router";
import "./Style/main.scss";
import DeleteModal from "./Components/Common/DeleteModal";
import Modals from "./Contexts/Modals";
import Loader from "./Contexts/Loader";
import LoaderContainer from "./Components/Common/LoaderContainer";

function App() {
  return (
    <Messages>
      <Loader>
        <Modals>
          <Msg></Msg>
          <DeleteModal />
          <LoaderContainer />
          <Router />
        </Modals>
      </Loader>
    </Messages>
  );
}

export default App;
