import Request from "../utils/Request";
import urls from "../utils/urls";
import axios from "axios";
import { getAuthToken, isAuthenticated } from "../utils/common";

export const actionTypes = {
  FETCH_REPORTS_SUCCESS: "FETCH_REPORTS_SUCCESS",
  FETCH_REPORTS_FAILURE: "FETCH_REPORTS_FAILURE",
  FETCH_DASHBOARD_REPORTS_SUCCESS: "FETCH_DASHBOARD_REPORTS_SUCCESS",
  FETCH_DASHBOARD_REPORTS_FAILURE: "FETCH_DASHBOARD_REPORTS_FAILURE",
  FETCH_COMMISION_RANGE_SUCCESS: "FETCH_COMMISION_RANGE_SUCCESS",
};

export function fetchMonthlyReportsSuccess(data) {
  return {
    type: actionTypes.FETCH_DASHBOARD_REPORTS_SUCCESS,
    payload: data,
  };
}

export function fetchMonthlyReportsFailure(error) {
  return {
    type: actionTypes.FETCH_DASHBOARD_REPORTS_FAILURE,
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

    const promise1 = axios
      .get(`${urls.login.BASE_URL}${urls.payout.MONTHLY_REPORT}`, options)
      .catch(() => "");
    const promise2 = axios
      .get(`${urls.login.BASE_URL}${urls.payout.STATUS_REPORT}`, options)
      .catch(() => "");
    const promise3 = axios
      .get(
        `${urls.login.BASE_URL}${urls.payout.STATUS_TRANSACTION_REPORT}`,
        options
      )
      .catch(() => "");

    axios
      .all([promise1, promise2, promise3])
      .then(
        axios.spread((...responses) => {
          const monthlyReport = responses[0] && responses[0].data;
          const statusReport = responses[1] && responses[1].data;
          const statusTranscReport = responses[2] && responses[2].data;

          onSuccess({
            monthlyReport: monthlyReport,
            statusReport: statusReport,
            statusTranscReport: statusTranscReport,
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
  const { pageNo } = params;
  let apiPath = `${urls.login.BASE_URL}${urls.payout.TRANSACTION_REPORT}`;
  apiPath = pageNo
    ? apiPath.replace("{pageNo}", pageNo)
    : apiPath.replace("{pageNo}", 0);

  return (dispatch) => {
    const onSuccess = (data) => {
      dispatch(fetchReportsSuccess(data));
    };

    const onFail = (error) => {
      dispatch(fetchReportsFailure(error));
    };

    const api = new Request(dispatch, onSuccess, onFail, false);
    return api.post(apiPath, params);
  };
}

function fetchCommisionRangeSuccess(data) {
  return {
    type: actionTypes.FETCH_COMMISION_RANGE_SUCCESS,
    payload: data,
  };
}

export function fetchCommisionRange() {
  return (dispatch) => {
    const onSuccess = (data) => {
      dispatch(fetchCommisionRangeSuccess(data));
    };
    const onFail = (data) => {};

    const api = new Request(dispatch, onSuccess, onFail, false);
    return api.get(`${urls.login.BASE_URL}${urls.payout.COMMISSION_RANGE}`);
  };
}
