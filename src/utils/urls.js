export default {
  login: {
    //  BASE_URL: "https://vendor-apiservice.pay2mobiles.com:8443",
    BASE_URL: "http://34.93.135.35:8083",
    LOGIN_REQUEST: "/api/authenticate",
    OTP_VALIDATION: "/agent/otp/validation",
    LOGIN_OTP_RESEND: "/agent/otp/resend",
    FETCH_USER_PROFILE: "/user/getUserProfile",
    GET_PROFILE: "/api/user/account",
    GET_WALLET: "/api/wallet",
    GET_API_USERS: "/api/users?pageSize=100",
    RESET_PASSWORD: "/api/user/account/reset-password/init",
    UPDATE_PASSWORD: "/api/user/account/reset-password/finish",
    CHANGE_PASSWORD: "/api/user/account/change-password",
  },

  User: {
    USER_LIST: "/api/users",
    CREATE_NEW_USER: "/api/users",
    UPDATE_USER: "/api/update-users",
    DELETE_USER: "/api/delete-users/",
    EDIT_USER: "/api/users/search/{userId}",
    ADD_BENEFICIARY: "/api/add-beneficiary",
    GET_BENEFICIARY: "/api/beneficiary?pageNo=0&pageSize=100",
    SAVE_FDETAILS: "/api/user/save-financial-details",
    GET_FDETAILS: "/api/user/financial-details",
    SEARCH_USER: "/api/users/search",
  },

  OperatorList: {
    OPERATOR_LIST: "/api/operator/",
  },

  ServiceList: {
    SERVICE_LIST: "/api/service/list",
  },

  Wallet: {
    WALLET_SUMMARY: "/api/admin/retailerWalletDetail",
    ADD_CREDIT: "/api/wallet/deposit",
    DEDUCT_CREDIT: "/api/wallet/debit",
    FUND_REQUEST: "/api/wallet/fund-request",
    FETCH_FUND_REQUEST: "/api/wallet/fund-request-list?pageNo=0&pageSize=100",
    FUND_REQUEST_APPROVE: "/api/wallet/fund-approve?reqstfunduuid=",
    FUND_REQUEST_REJECT: "/api/wallet/reject-fund-request?reqstfunduuid=",
  },
  payout: {
    ADD_PAYOUT: "/api/user/payout",
    TRANSACTION_REPORT: "/api/payout/transaction-report?pageNo=0&pageSize=100",
    MONTHLY_REPORT: "/api/payout/dashboard/monthly-report",
    STATUS_REPORT: "/api/payout/dashboard/status-report",
    STATUS_TRANSACTION_REPORT:
      "/api/payout/dashboard/status-transaction-report",
    COMMISSION_RANGE: "/api/user/payout/commission-range",
    UPDATE_COMMISION: "/api/user/payout/update-commission",
  },
  userCommission: {
    GET_USERCOMMISSION: "/api/user/comission",
    UPDATE_USERCOMMISSION: "/api/user/comission/update",
    ADD_COMMISSION: "/api/user/comission/create-new-user-commission",
  },

  transactionList: {
    GET_TRANSACTION: "/api/report/admin/transactions",
  },
};
