import "./App.css";

import Price from "./Components/002/Price2";

const price = 100;
const vatColor = "orange"; //drilinimas - perdavima argumento per vaika anūkui

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>002</h1>
        <div>
          <span>Price: </span>
          <b>{price} eur</b>
        </div>

        <Price productPrice={price} discount={20} vatColor={vatColor} />
      </header>
    </div>
  );
}

export default App;
