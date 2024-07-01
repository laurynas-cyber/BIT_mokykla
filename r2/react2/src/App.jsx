import Modals from "./components/Modals";
import { Data } from "./Contexts/DataContext";
import "./app.scss";
import CreateButtons from "./components/CreateButtons";
import List from "./components/List";

export default function App() {
  return (
    <Data>
      <div className="container">
        <div className="row">
          <div className="col">
            <CreateButtons />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <List />
          </div>
        </div>
      </div>
      <Modals />
    </Data>
  );
}
