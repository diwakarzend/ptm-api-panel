import { combineReducers } from "redux";
import loginUser from "./reducers/Login";
import users from "./reducers/users";

export default combineReducers({
  loginUser,
  users,
});
