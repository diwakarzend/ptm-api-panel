import { actionTypes } from "../actions/userwallet";
import { clone } from "../utils/common";

const initialState = {
  fundRequest: "",
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case actionTypes.FETCH_FUND_REQUESTS_SUCCESS:
      changes = {
        ...state,
        fundRequest: action.payload,
      };
      break;

    case actionTypes.FETCH_FUND_REQUESTS_FAILURE:
      changes = {
        ...state,
        fundRequest: action.payload,
      };
      break;

    default:
      changes = { ...state };
      break;
  }

  return clone(state, changes);
};
