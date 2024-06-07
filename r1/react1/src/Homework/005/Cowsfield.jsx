function CWfield({ animal }) {
  console.log(animal);
  return (
    <div className="field">
      <h2>Cows</h2>
      <div className="CowsCont">
        {animal.map((a, i) => (
          <div key={i} className="cow">
            {a}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CWfield;
