import { actionTypes } from "../actions/Login";
import { getObjectValueIfEmpty, clone, isEmpty } from "../utils/common";
import {
  isAuthenticated,
  saveAuthToken,
  clearAuthToken,
} from "../utils/common";

const initialState = {
  isLoggingIn: false,
  isOtpValidating: false,
  isOtpValidated: false,
  invalidOtpCount: 0,
  isAuthenticated: isAuthenticated(),
  isFetchingUserProfile: false,
  isFetchedUserProfile: false,
  authToken: "",
  isLoggedIn: false,
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
      changes = { isAuthenticated: isAuthenticated() };
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

      console.log("Action", payload);

      changes = {
        loginInfo: payload,
        isLoggedIn: isAuthenticated(payload),
      };

      break;

    case actionTypes.LOGIN_REQUEST_FAILED:
      changes = {
        isLoggingIn: false,
        isLoggedIn: false,
        isOtpValidated: false,
        invalidOtpCount: 0,
        isAuthenticated: false,
        userData: null,
      };
      break;

    case actionTypes.LOGIN_OTP_VALIDATION_INIT:
      changes = {
        isLoggingIn: false,
        isOtpValidating: true,
        isOtpValidated: false,
        isAuthenticated: false,
      };
      break;

    case actionTypes.LOGIN_OTP_VALIDATION_SUCCESS:
      {
        const isOtpValidated = getObjectValueIfEmpty(
          action,
          "payload.data.success",
          false
        );
        const userData = isOtpValidated
          ? getObjectValueIfEmpty(action, "payload.data.data", {})
          : state.userData;
        const invalidOtpCount = isOtpValidated ? 0 : state.invalidOtpCount + 1;
        const authToken = getObjectValueIfEmpty(
          action,
          "payload.headers.token",
          null
        );
        const isAuthenticated =
          isOtpValidated && !isEmpty(userData) && !isEmpty(authToken);
        if (isAuthenticated) saveAuthToken(authToken);

        changes = {
          isOtpValidating: false,
          isAuthenticated,
          isOtpValidated,
          invalidOtpCount,
          userData,
        };
      }
      break;

    case actionTypes.LOGIN_OTP_VALIDATION_FAILED:
      changes = {
        isOtpValidating: false,
        isOtpValidated: false,
        invalidOtpCount: state.invalidOtpCount + 1,
        isAuthenticated: false,
      };
      break;

    case actionTypes.LOGIN_OTP_RESEND_INIT:
      changes = {};
      break;

    case actionTypes.LOGIN_OTP_RESEND_SUCCESS:
      changes = {};
      break;

    case actionTypes.LOGIN_OTP_RESEND_FAILED:
      changes = {};
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
