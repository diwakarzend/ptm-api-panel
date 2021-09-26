import Request from "../utils/Request";
import urls from "../utils/urls";

export const actionTypes = {
  FETCH_REPORTS_SUCCESS: "FETCH_REPORTS_SUCCESS",
  FETCH_REPORTS_FAILURE: "FETCH_REPORTS_FAILURE",
  FETCH_MONTHLY_REPORTS_SUCCESS: "FETCH_MONTHLY_REPORTS_SUCCESS",
  FETCH_MONTHLY_REPORTS_FAILURE: "FETCH_MONTHLY_REPORTS_FAILURE",
};

export function fetchMonthlyReportsSuccess(data) {
  return {
    type: actionTypes.FETCH_MONTHLY_REPORTS_SUCCESS,
    payload: data,
  };
}

export function fetchMonthlyReportsFailure(error) {
  return {
    type: actionTypes.FETCH_MONTHLY_REPORTS_FAILURE,
  };
}

export function fetchMonthlyReports(params) {
  return (dispatch) => {
    const onSuccess = (data) => {
      dispatch(fetchMonthlyReportsSuccess(data));
    };

    const onFail = (error) => {
      dispatch(fetchMonthlyReportsFailure(error));
    };

    const api = new Request(dispatch, onSuccess, onFail, false);
    return api.get(
      `${urls.login.BASE_URL}${urls.payout.MONTHLY_REPORT}`,
      params
    );
  };
}

export function fetchReportsSuccess(data) {
  return {
    type: actionTypes.FETCH_REPORTS_SUCCESS,
    payload: data,
  };
}

export function fetchReportsFailure(error) {
  return {
    type: actionTypes.FETCH_REPORTS_FAILURE,
  };
}

export function fetchTransactionReport(params) {
  return (dispatch) => {
    const onSuccess = (data) => {
      dispatch(fetchReportsSuccess(data));
    };

    const onFail = (error) => {
      dispatch(fetchReportsFailure(error));
    };

    const api = new Request(dispatch, onSuccess, onFail, false);
    return api.post(
      `${urls.login.BASE_URL}${urls.payout.TRANSACTION_REPORT}`,
      params
    );
  };
}
