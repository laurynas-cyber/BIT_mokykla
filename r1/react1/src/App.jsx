import "./App.css";
import "./Homework/003/dogs.scss";
import Dog from "./Homework/003/Dogs";

// https://docs.google.com/document/d/1sMMk_ROxJsXIR3ZFuaPEu0OvrwztyYCjkz13ELKUaPs/edit
function App() {
  const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];

  return (
    <div className="App">
      <header className="App-header">
        <h3>5uzdv</h3>
        <ul>
          {dogs.map((d, i) =>
            d.length > 6 ? (
              <>
                <div className="HW2container">
                  <span>{d.length}.</span>
                  <Dog key={i} dog={d} color={"#47A025"} />
                </div>
              </>
            ) : (
              <>
                <div className="HW2container">
                  <span>{d.length}.</span>
                  <Dog key={i} dog={d} color="#BA274A" />
                </div>
              </>
            )
          )}
        </ul>
        <ul>
          {dogs
            .filter((d) => d[0] !== d[0].toUpperCase())
            .map((d, i) => (
              <li className="sqr" key={i}>
                {d}
              </li>
            ))}
        </ul>
        <h3>3uzdv</h3>
        <ul>
          {dogs.map((d, i) =>
            i % 2 === 0 ? (
              <>
                <li className="sqr" key={i}>
                  {d}
                </li>
              </>
            ) : (
              <>
                <li className="ovl" key={i}>
                  {d}
                </li>
              </>
            )
          )}
        </ul>
        <h3>2uzdv</h3>
        <ol>
          {dogs
            .sort((a, b) => b.length - a.length)
            .map((d, i) => (
              <>
                <div className="HW2container">
                  <span>{i}.</span>
                  <li className="ovl" key={i}>
                    {d}
                  </li>
                </div>
              </>
            ))}
        </ol>
        <h3>1uzdv</h3>
        <ul>
          {dogs.map((d, i) => (
            <>
              <li className="sqr" key={i}>
                {d}
              </li>
            </>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
