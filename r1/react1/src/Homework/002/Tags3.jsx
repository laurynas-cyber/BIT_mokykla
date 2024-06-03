function Tags3({ go }) {
  return (
    <div className="App">
      {go === 1 ? (
        <h1 style={{ color: "blue" }}>Zebrai ir Bebrai</h1>
      ) : go === 2 ? (
        <h1 style={{ color: "red" }}>Zebrai ir Bebrai</h1>
      ) : (
        <h1>Zebrai ir Bebrai</h1>
      )}
    </div>
  );
}

export default Tags3;
