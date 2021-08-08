import { actionTypes } from "../actions/Login";
import { getObjectValueIfEmpty, clone, isEmpty } from "../utils/common";
import {
  isAuthenticated,
  saveAuthToken,
  clearAuthToken,
} from "../utils/common";

const initialState = {
  /*
   * TODO- isAuthenticated and user data need to be fetched from local storage
   */
  isLoggingIn: false,
  isLoggedIn: false,
  isOtpValidating: false,
  isOtpValidated: false,
  invalidOtpCount: 0,
  isAuthenticated: isAuthenticated(),
  isFetchingUserProfile: false,
  isFetchedUserProfile: false,
  userData: null,
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case actionTypes.LOGIN_RESET_STORE:
      changes = { ...initialState, isAuthenticated: isAuthenticated() };
      break;

    case actionTypes.LOGIN_REQUEST_INIT:
      changes = {
        isLoggingIn: true,
        isLoggedIn: false,
        isOtpValidating: false,
        isOtpValidated: false,
        invalidOtpCount: 0,
        isAuthenticated: false,
        userData: null,
      };
      break;

    case actionTypes.LOGIN_REQUEST_SUCCESS:
      {
        const userData = getObjectValueIfEmpty(
          action,
          "payload.data.id_token",
          {}
        );
        const isSingleFactor = !getObjectValueIfEmpty(
          userData,
          "mfaEnabled",
          0
        );
        const authToken = isSingleFactor
          ? getObjectValueIfEmpty(action, "payload.headers.authorization", null)
          : null;
        const isAuthenticated =
          isSingleFactor && !isEmpty(userData) && !isEmpty(authToken);

        if (isAuthenticated) saveAuthToken(authToken);

        changes = {
          isLoggingIn: false,
          isOtpValidated: false,
          invalidOtpCount: 0,
          isAuthenticated,
          isLoggedIn: getObjectValueIfEmpty(
            action,
            "payload.data.success",
            false
          ),
          userData,
        };
      }
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
      };
      break;

    default:
      changes = {};
      break;
  }

  return clone(state, changes);
};
