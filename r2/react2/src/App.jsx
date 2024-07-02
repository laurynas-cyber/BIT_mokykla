import CreateButton from "./Components/CreateButtons";
import List from "./Components/List";
import Modals from "./Components/Modals";
import { Data } from "./Contexts/DataContext";
import Messages from "./Components/Messages";
import "./app.scss";

export default function App() {
  return (
    <Data>
      <div className="container">
        <div className="row">
          <div className="col">
            <CreateButton />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <List />
          </div>
        </div>
      </div>
      <Modals />
      <Messages />
    </Data>
  );
}
