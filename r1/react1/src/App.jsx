import "./App.css";
import Vat from "./Components/002/Vat";

const price = 254;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>002</h1>
        <div>
          <span>Price: </span>
          <b>{price} eur</b>
        </div>
        <Vat productPrice={price} color="skyblue" show={"big"} />
      </header>
    </div>
  );
}

export default App;
