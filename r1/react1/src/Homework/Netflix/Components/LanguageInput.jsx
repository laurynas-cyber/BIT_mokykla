import { useRef, useEffect } from "react";

function LanguageInput() {
  const item = useRef();

  useEffect((_) => {
    item.current.focus();
  }, []);

  function handleFocus(e) {
    // item.current.focus();
    // e.target.autofocus = true;
    // console.log(e);
  }

  return (
    <select
      className="languageSelect"
      ref={item}
      onClick={(e) => handleFocus(e)}
    >
      <option style={{ color: "black" }}>English</option>
      <option>Ruski</option>
    </select>
  );
}

export default LanguageInput;
