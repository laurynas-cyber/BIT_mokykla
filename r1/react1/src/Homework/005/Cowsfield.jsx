function CWfield({ animal }) {
  return (
    <div className="field">
      <h2>Cows</h2>
      <div className="CowsCont animalCont">
        {animal.current.map((a, i) => (
          <div key={i} className="cow">
            {a.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CWfield;
