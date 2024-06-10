import rand from "../../funkcijos/randnum";

let randId = (_) => {
  return rand(0, 9999999).toString().padStart(7, "0");
};

function Shfield({ animal }) {
  animal.current = [];
  for (let i = 0; i < rand(1, 25); i++) {
    // setSAnimal((a) => [...a, { id: "A" + randId() }]);
    animal.current.push({ id: "A" + randId() });
  }

  return (
    <div className="field">
      <h2>Sheeps</h2>
      <div className="CowsCont animalCont">
        {animal.current.map((a, i) => (
          <div key={i} className="sheep">
            {a.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shfield;
