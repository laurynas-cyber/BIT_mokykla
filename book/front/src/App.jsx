import Messages from "./Contexts/Messages";
import Msg from "./Components/Common/Msg";
import { Router } from "./Contexts/Router";
import "./Style/main.scss";
import DeleteModal from "./Components/Common/DeleteModal";
import Modals from "./Contexts/Modals";

function App() {
  return (
    <Messages>
      <Modals>
        <Msg></Msg>
        <DeleteModal />
        <Router />
      </Modals>
    </Messages>
  );
}

export default App;
