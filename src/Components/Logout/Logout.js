import React from "react";
import { clearAuthToken } from "../../utils/common";
import { loginResetStore } from "../../actions/Login";

const LogoutUser = React.memo((props) => {
  const { history, dispatch } = props;
  console.log("props", props);
  const logout = () => {
    clearAuthToken();
    dispatch(loginResetStore());
    history.push("/");
  };

  return <div onClick={() => logout()}>Logout</div>;
});

export default LogoutUser;
