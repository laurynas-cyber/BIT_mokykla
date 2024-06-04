import "./dogs.scss";

export default function Dogs({ dog, color }) {
  return (
    <li className="ovl" style={{ color }}>
      {dog}
    </li>
  );
}
