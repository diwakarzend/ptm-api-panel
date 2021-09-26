import Request from "../utils/Request";
import urls from "../utils/urls";
import axios from "axios";
import { getAuthToken, isAuthenticated } from "../utils/common";

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

    // const api = new Request(dispatch, onSuccess, onFail, false);
    const options = {
      headers: {
        Authorization: getAuthToken(),
        "api-Authorization": getAuthToken("api-Authorization"),
      },
    };

    const promise1 = axios.get(
      `${urls.login.BASE_URL}${urls.payout.MONTHLY_REPORT}`,
      options
    );
    const promise2 = axios.get(
      `${urls.login.BASE_URL}${urls.payout.STATUS_REPORT}`,
      options
    );

    axios
      .all([promise1, promise2])
      .then(
        axios.spread((...responses) => {
          const monthlyReport = responses[0].data;
          const statusReport = responses[1].data;
          onSuccess({
            monthlyReport: monthlyReport,
            statusReport: statusReport,
          });
        })
      )
      .catch((errors) => {
        console.log("responseOne errors", errors);
      });
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
