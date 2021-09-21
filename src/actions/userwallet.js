import Request from "../utils/Request";
import urls from "../utils/urls";

export const actionTypes = {
  FETCH_FUND_REQUESTS_SUCCESS: "FETCH_FUND_REQUESTS_SUCCESS",
  FETCH_FUND_REQUESTS_FAILURE: "FETCH_FUND_REQUESTS_FAILURE",
};

export function fetchFundRequestsSuccess(data) {
  return {
    type: actionTypes.FETCH_FUND_REQUESTS_SUCCESS,
    payload: data,
  };
}

export function fetchFundRequestsFailure(error) {
  return {
    type: actionTypes.FETCH_FUND_REQUESTS_FAILURE,
  };
}

export function fetchFundRequests(userRole, requestStatus) {
  let apiPath = urls.Wallet.FETCH_FUND_REQUEST;

  if (userRole == "PTM_VENDOR") {
    apiPath =
      urls.Wallet.FUND_REQUEST + `?status=${requestStatus || "INITIATED"}`;
  }

  return (dispatch) => {
    const successFn = (data, headers) => {
      dispatch(fetchFundRequestsSuccess(data));
    };

    const errorFn = (error) => {
      dispatch(fetchFundRequestsFailure(error));
    };

    const api = new Request(dispatch, successFn, errorFn, false);
    return api.get(`${urls.login.BASE_URL}${apiPath}`);
  };
}
