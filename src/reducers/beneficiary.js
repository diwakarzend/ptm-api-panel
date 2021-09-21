import { actionTypes } from "../actions/beneficiary";
import { clone } from "../utils/common";

const initialState = {
  benfeciary: "",
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case actionTypes.FETCH_BENEFICIARY_SUCCESS:
      changes = {
        ...state,
        fundRequest: action.payload,
      };
      break;

    case actionTypes.FETCH_BENEFICIARY_FAILURE:
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
