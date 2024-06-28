import Create from "./components/Create";
import { Data } from "./Contexts/DataContext";
import "./app.scss";
import CreateButtons from "./components/CreateButtons";

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
          <div className="col">LIST</div>
        </div>
      </div>
      <Create />
    </Data>
  );
}
