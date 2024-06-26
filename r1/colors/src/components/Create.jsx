import { useState } from "react";

function Create({ create, setStore, setCreate, addMessage }) {
  const rbc = (
    <svg
      height="97.75"
      viewBox="0 0 97.75 97.75"
      width="97.75"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path d="m48.875 29.791c-10.022 0-18.176 8.561-18.176 19.084s8.154 19.084 18.176 19.084c10.021 0 18.176-8.561 18.176-19.084s-8.155-19.084-18.176-19.084z" />
          <path d="m48.875 0c-26.993 0-48.875 21.882-48.875 48.875s21.882 48.875 48.875 48.875 48.875-21.882 48.875-48.875-21.882-48.875-48.875-48.875zm0 84.086c-18.915 0-34.303-15.795-34.303-35.211s15.388-35.211 34.303-35.211c18.914 0 34.303 15.795 34.303 35.211s-15.389 35.211-34.303 35.211z" />
        </g>
      </g>
    </svg>
  );

  const rbu = (
    <svg
      height="97.75"
      viewBox="0 0 97.75 97.75"
      width="97.75"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path d="m48.875 0c-26.993 0-48.875 21.882-48.875 48.875s21.882 48.875 48.875 48.875 48.875-21.882 48.875-48.875-21.882-48.875-48.875-48.875zm0 84.086c-18.915 0-34.303-15.795-34.303-35.211s15.388-35.211 34.303-35.211c18.914 0 34.303 15.795 34.303 35.211s-15.389 35.211-34.303 35.211z" />
        </g>
      </g>
    </svg>
  );

  const [shape, setShape] = useState(create.shape);
  const [color, setColor] = useState(create.color);
  const [range, setRange] = useState(create.range);
  const [errors, setErrors] = useState([]);

  const handleShape = (e) => {
    setShape(e.target.id);
  };

  const handleCreate = (_) => {
    setErrors([]);
    let hasError = false;
    if (!shape) {
      addMessage({
        title: "Error",
        type: "error",
        text: "Please select color shape",
      });
      hasError = true;
      setErrors((e) => [...e, "shape"]);
    }
    if (range > 8) {
      addMessage({ title: "Error", type: "error", text: "Max range is 8" });
      hasError = true;
      setErrors((e) => [...e, "range"]);
    }
    if (hasError) {
      return;
    }
    setStore({
      shape,
      color,
      range,
    });
    setCreate(null);
  };

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add new color</h5>
            <button
              type="button"
              className="btn-close"
              onClick={(_) => setCreate(null)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="m-2">
              <label
                className={
                  "form-label" + (errors.includes("color") ? " error" : "")
                }
              >
                Choose your color
              </label>
              <input
                type="color"
                className="form-control form-control-color"
                onChange={(e) => setColor(e.target.value)}
                value={color}
                title="Choose your color"
              />
            </div>
            <div className="m-2">
              <label
                className={
                  "form-label flex-space" +
                  (errors.includes("range") ? " error" : "")
                }
              >
                <span>How many?</span> <b>{range}</b>
              </label>
              <input
                type="range"
                className="form-range"
                min={1}
                max={10}
                step={1}
                value={range}
                onChange={(e) => setRange(+e.target.value)}
              />
            </div>
            <div className="m-2">
              <label
                className={
                  "form-label" + (errors.includes("shape") ? " error" : "")
                }
              >
                Shape
              </label>
              <div className="cb-bin">
                <div className="cb">
                  <input
                    type="checkbox"
                    id="square"
                    checked={shape === "square"}
                    onChange={handleShape}
                  />
                  <label htmlFor="square">
                    {shape === "square" ? rbc : rbu}
                  </label>
                  <span>Square</span>
                </div>
                <div className="cb">
                  <input
                    type="checkbox"
                    id="circle"
                    checked={shape === "circle"}
                    onChange={handleShape}
                  />
                  <label htmlFor="circle">
                    {shape === "circle" ? rbc : rbu}
                  </label>
                  <span>Circle</span>
                </div>
                <div className="cb">
                  <input
                    type="checkbox"
                    id="rounded"
                    checked={shape === "rounded"}
                    onChange={handleShape}
                  />
                  <label htmlFor="rounded">
                    {shape === "rounded" ? rbc : rbu}
                  </label>
                  <span>Rounded</span>
                </div>
                <div className="cb">
                  <input
                    type="checkbox"
                    id="triangle"
                    checked={shape === "triangle"}
                    onChange={handleShape}
                  />
                  <label htmlFor="triangle">
                    {shape === "triangle" ? rbc : rbu}
                  </label>
                  <span>Triangle</span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="green" onClick={handleCreate}>
              Add
            </button>
            <button
              type="button"
              className="red"
              onClick={(_) => setCreate(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
