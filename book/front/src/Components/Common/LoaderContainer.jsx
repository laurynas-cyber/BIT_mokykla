import { useContext } from "react";
import { LoaderContext } from "../../Contexts/Loader";

export default function LoaderContainer() {
  const { show } = useContext(LoaderContext);

  if (!show) return null;

  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
}
