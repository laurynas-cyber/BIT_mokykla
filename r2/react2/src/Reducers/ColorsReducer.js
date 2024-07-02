import * as c from "../Constants/colorsConstants";

const colorsReducer = (state, action) => {
  let s = state !== null ? structuredClone(state) : null;

  switch (action.type) {
    case c.GET_COLORS_FROM_SERVER:
      s = action.payload.map((row) => {
        row.range = row.amount;
        delete row.amount;
        return row;
      });
      break;

    case c.ADD_COLOR:
      (s ?? []).unshift(action.payload);
      break;

    case c.ADD_COLOR_ID_TO_0:
      s = s.map((c) => (c.id === 0 ? { ...c, id: action.payload } : c));
      break;

    case c.REMOVE_COLOR_ID_0:
      s = s.filter((c) => c.id !== 0);
      break;

    case c.HIDE_COLOR_ID:
      s = s.map((c) => (c.id === action.payload ? { ...c, hide: true } : c));
      break;

    case c.REMOVE_HIDEN:
      s = s.filter((c) => !c.hasOwnProperty("hide")); //hasOwnProperties iesko ar yra propertis tokiu pavadinimus
      break;
    case c.SHOW_HIDDEN:
      s = s.map((c) => {
        if (c.hasOwnProperty("hide")) {
          delete c.hide;
        }
        return c;
      });

    case c.EDIT_COLOR:
      s = s.map((c) => {
        if (c.id === action.payload.id) {
          const old = { ...c };
          c = { ...action.payload, old };
        }
        return c;
      });
      break;

    default:
  }

  return s;
};

export default colorsReducer;
