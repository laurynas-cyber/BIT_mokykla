import * as c from "../Constants/colorsConstants";

const colorsReducer = (state, action) => {
  let s = state !== null ? structuredClone(state) : null; //nukopijuoja state

  switch (action.type) {
    case c.GET_COLORS_FROM_SERVER:
      s = action.payloadm.map((row) => {
        row.range = row.amount; //keiciam amount i range nes range i rezervuotas sqle
        delete row.amount;
        return row;
      });
      break;

    default:
  }

  return s;
};

export default colorsReducer;
