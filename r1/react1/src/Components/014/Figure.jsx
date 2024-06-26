const WidthColor = (Component) => (color) => <Component color={color} />; //hof 014/015 pamoka

function Figure({ children, color }) {
  return <>{WidthColor(children.type)({ color })}</>;
}

export default Figure;
