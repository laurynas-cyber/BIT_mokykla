import B from "./B";
import D from "./D";
import "./styles.css";

export default function A() {
  return (
    <>
      <div
        style={{ border: "yellow solid 2px", width: "800px", height: "580px" }}
      >
        <div className="flex">
          <B />
          <B />
        </div>
        <div className="flex">
          <D /> <D /> <D />
        </div>
      </div>
    </>
  );
}
