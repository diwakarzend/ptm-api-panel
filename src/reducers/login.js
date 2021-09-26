import { actionTypes } from "../actions/Login";
import { getObjectValueIfEmpty, clone, isEmpty } from "../utils/common";
import {
  isAuthenticated,
  saveAuthToken,
  clearAuthToken,
} from "../utils/common";

const initialState = {
  isLoggedIn: false,
  isAuthenticated: false,
  loginInfo: "",
  userData: null,
  userWallet: null,
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case actionTypes.FETCH_USER_DETAILS_SUCCESS:
      if (action.response.success == true && action.response.data) {
        changes.userData = action.response.data;
      }
      break;

    case actionTypes.FETCH_USER_WALLET_SUCCESS:
      console.log("FETCH_USER_WALLET_SUCCESS", action, state);
      if (action.response.success == true && action.response.data) {
        changes.userWallet = action.response.data;
      }
      break;

    case actionTypes.LOGIN_RESET_STORE:
      //  console.log("isAuthenticated", typeof isAuthenticated);
      changes = {
        ...initialState,
        // isAuthenticated: isAuthenticated(),
      };
      break;

    case actionTypes.LOGIN_REQUEST_INIT:
      changes = {
        isLoggedIn: false,

        userData: null,
      };
      break;

    case actionTypes.LOGIN_REQUEST_SUCCESS:
      const { payload } = action;
      // const userData = getObjectValueIfEmpty(
      //   action,
      //   "payload.data.id_token",
      //   {}
      // );
      //
      // const isSingleFactor = !getObjectValueIfEmpty(userData, "mfaEnabled", 0);
      // // const authToken = isSingleFactor
      // //   ? getObjectValueIfEmpty(action, "payload.headers.authorization", null)
      // //   : null;
      // const authToken = isSingleFactor
      //   ? getObjectValueIfEmpty(action, "payload.headers.authorization", null)
      //   : null;

      // const isAuthenticated =
      //   isSingleFactor && !isEmpty(userData) && !isEmpty(authToken);

      // if (isAuthenticated) saveAuthToken(authToken);

      // changes = {
      //   isLoggingIn: false,
      //   isOtpValidated: false,
      //   invalidOtpCount: 0,

      //   isAuthenticated,

      //   authToken: authToken,
      //   // userData,
      // };


      changes = {
        loginInfo: payload,
        isLoggedIn: isAuthenticated(payload),
        isAuthenticated: isAuthenticated(payload),
      };

      break;

    case actionTypes.LOGIN_REQUEST_FAILED:
      changes = {
        loginInfo: action.payload,
      };
      break;

    case actionTypes.LOGOUT_REQUEST:
      clearAuthToken();
      changes = {
        isAuthenticated: false,
        userData: null,
      };
      break;

    default:
      changes = {};
      break;
  }

  return clone(state, changes);
};
