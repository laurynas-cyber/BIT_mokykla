import "./App.css";
import Tags4 from "./Homework/002/Tags4";
// https://docs.google.com/document/d/1omOws0Y6jkbuaXKI7-lGvcG6R7FanuZPbmch3wCYr4A/edit

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tags4
          color="skyblue"
          string1={"Homework"}
          string2={"Workhome"}
          string="Super"
          go={1}
        />
      </header>
    </div>
  );
}

export default App;
