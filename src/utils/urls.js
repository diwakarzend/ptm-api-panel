export default {
  login: {
    // BASE_URL: "https://vendor-apiservice.pay2mobiles.com:8443",
    BASE_URL: "http://34.93.135.35:8080",
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
    API_LIST: "/api/ip",
    API_LIST_UPDATE: "/api/update-ip",
    CREATE_NEW_USER: "/api/users",
    UPDATE_USER: "/api/update-users",
    DELETE_USER: "/api/delete-users/",
    EDIT_USER: "/api/users/search/{userId}",
    ADD_BENEFICIARY: "/api/add-beneficiary",
    UPDATE_BENEFICIARY: "/api/update-beneficiary",
    GET_BENEFICIARY: "/api/beneficiary?pageNo=0&pageSize=100",
    SAVE_FDETAILS: "/api/user/save-financial-details",
    GET_FDETAILS: "/api/user/financial-details",
    SEARCH_USER: "/api/users/search",
    GET_ALL_PERMISISSIONS: "/api/user/mapping",
    MANAGE_USER_PERMISSIONS: "/api/user/mapping-api",
    MANAGE_USER_STATUS: "/api/user/user-status",
  },

  OperatorList: {
    OPERATOR_LIST: "/api/operator/",
  },

  ServiceList: {
    SERVICE_LIST: "/api/service/list",
  },

  Wallet: {
    WALLET_SUMMARY: "/api/admin/retailerWalletDetail",
    // ADD_CREDIT: "/api/wallet/deposit",
    // DEDUCT_CREDIT: "/api/wallet/debit",
    MANAGE_WALLET: "/api/wallet/{actionType}",
    VIEW_TRANSACTIONS: "/api/wallet/transactions/{userId}",
    FUND_REQUEST: "/api/wallet/fund-request",
    FETCH_FUND_REQUEST: "/api/wallet/fund-request-list?pageNo=0&pageSize=100",
    FUND_REQUEST_APPROVE: "/api/wallet/fund-approve?reqstfunduuid=",
    FUND_REQUEST_REJECT: "/api/wallet/reject-fund-request?reqstfunduuid=",
  },
  payout: {
    ADD_PAYOUT: "/api/user/payout",
    TRANSACTION_REPORT:
      "/api/payout/transaction-report?pageNo={pageNo}&pageSize=10",
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
  ptp: {
    GET_VENDOR_LISTING: "/api/ptp/vendor-details",
    POST_VENDOR_LISTING: "/api/ptp/create-ptp",
    GET_P2P_USER_DETAILS: "/api/merchant/sender/details",
    GET_MAPQR_LISTING: "/api/ptp/ptp-details",
    UPLOAD_MAPQR_REQUEST: "/api/ptp/uploadQRCode",
  },
  user: {
    GET_USER_DETAILS: "/api/user/financial-details",
    GET_VENDOR_DETAILS: "/api/users?pageSize=100",
  },
};
