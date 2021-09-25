import { combineReducers } from "redux";
import login from "./reducers/login";
import users from "./reducers/users";
import userwallet from "./reducers/userwallet";
import beneficiary from "./reducers/beneficiary";
import payout from "./reducers/payout";

export default combineReducers({
  login,
  users,
  userwallet,
  beneficiary,
  payout,
});
