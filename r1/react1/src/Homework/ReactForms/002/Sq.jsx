import React from "react";

export default function Sq({ Sqlist, funk, clickFunk }) {
  return (
    <div className="form">
      <span>Number</span>
      <input type="text" name="" id="" value={Sqlist} onChange={funk} />
      <button type="button" className="red" onClick={clickFunk}>
        SetSq
      </button>
    </div>
  );
}
