import { actionTypes } from "../actions/payout";
import { clone } from "../utils/common";

const initialState = {
  reports: "",
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case actionTypes.FETCH_REPORTS_SUCCESS:
      changes = {
        ...state,
        reports: action.payload,
      };
      break;

    case actionTypes.FETCH_REPORTS_FAILURE:
      changes = {
        ...state,
        reports: action.payload,
      };
      break;

    case actionTypes.FETCH_MONTHLY_REPORTS_SUCCESS:
      changes = {
        ...state,
        ...action.payload,
      };
      break;

    case actionTypes.FETCH_MONTHLY_REPORTS_FAILURE:
      changes = {
        ...state,
        ...action.payload,
      };
      break;

    default:
      changes = { ...state };
      break;
  }

  return clone(state, changes);
};
