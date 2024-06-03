function Tags4({ go, string1, string2 }) {
  return (
    <div className="App">
      {go === 1 ? (
        <h1 style={{ color: "blue" }}>{string1}</h1>
      ) : go === 2 ? (
        <h1 style={{ color: "red" }}>{string2}</h1>
      ) : (
        <h1>Zebrai ir Bebrai</h1>
      )}
    </div>
  );
}

export default Tags4;
