import { useState } from "react";

function Create({ setCreate }) {
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

  const dv = {
    shape: "square",
    color: "#000000",
    range: 1,
  };

  const [shape, setShape] = useState(dv.shape);
  const [color, setColor] = useState(dv.color);
  const [range, setRange] = useState(dv.range);

  const handleShape = (e) => {
    setShape((r) => (r === e.target.id ? "" : e.target.id));
  };

  const save = (_) => {
    setCreate({
      shape,
      color,
      range,
    });
    setShape(dv.shape);
    setColor(dv.color);
    setRange(dv.range);
  };
  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add new Color</h5>
            <button type="button" className="btn-close"></button>
          </div>

          <div className="modal-body">
            <div className="m-2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label className="form-label">How many?</label>
                <span>{range}</span>
              </div>

              <input
                type="range"
                className="form-range"
                min={1}
                max={10}
                value={range}
                onChange={(e) => setRange(+e.target.value)}
              />
            </div>
            <div className="m-2">
              <label className="form-label">Choose your color</label>
              <input
                type="color"
                className="form-control form-control-color"
                value={color}
                title="Choose your color"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="m-2">
              <label className="form-label">Shape</label>
              <div className="cb-bin">
                <div className="cb">
                  <input
                    type="checkbox"
                    id="rA"
                    checked={shape === "rA"}
                    onChange={handleShape}
                  />

                  <label htmlFor="rA">{shape === "rA" ? rbc : rbu}</label>
                  <span>Square</span>
                </div>
                <div className="cb">
                  <input
                    type="checkbox"
                    id="rB"
                    checked={shape === "rB"}
                    onChange={handleShape}
                  />

                  <label htmlFor="rB">{shape === "rB" ? rbc : rbu}</label>
                  <span>Circle</span>
                </div>
                <div className="cb">
                  <input
                    type="checkbox"
                    id="rC"
                    checked={shape === "rC"}
                    onChange={handleShape}
                  />

                  <label htmlFor="rC">{shape === "rC" ? rbc : rbu}</label>
                  <span>Rounded</span>
                </div>
                <div className="cb">
                  <input
                    type="checkbox"
                    id="rD"
                    checked={shape === "rD"}
                    onChange={handleShape}
                  />

                  <label htmlFor="rD">{shape === "rD" ? rbc : rbu}</label>
                  <span>Triangle</span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="green" onClick={save}>
              Save changes
            </button>
            <button type="button" className="red">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
