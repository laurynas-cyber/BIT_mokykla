import "./style.scss";

function Circle({ circle }) {
  return (
    <div
      className="circle"
      style={{ backgroundColor: "red" }}
      ref={circle}
    ></div>
  );
}

export default Circle;
