import Messages from "./Contexts/Messages";
import Msg from "./Components/Common/Msg";
import { Router } from "./Contexts/Router";
import "./Style/main.scss";

function App() {
  return (
    <Messages>
      <Msg></Msg>
      <Router />;
    </Messages>
  );
}

export default App;
