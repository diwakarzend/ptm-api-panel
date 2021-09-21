import { combineReducers } from "redux";
import loginUser from "./reducers/Login";
import users from "./reducers/users";
import userwallet from "./reducers/userwallet";
import beneficiary from "./reducers/beneficiary";

export default combineReducers({
  loginUser,
  users,
  userwallet,
  beneficiary,
});
