export default {
  login: {
    BASE_URL: "http://34.93.135.35:8060",
    LOGIN_REQUEST: "/api/authenticate",
    OTP_VALIDATION: "/agent/otp/validation",
    LOGIN_OTP_RESEND: "/agent/otp/resend",
    FETCH_USER_PROFILE: "/user/getUserProfile",
    REGISTRATION_USER: "/api/user/register",
    GET_PROFILE: "/api/user/account",
    GET_WALLET: "/api/wallet",
  },

  UserList: {
    USER_LIST: "/api/users",
    UPDATE_USER: "/api/users/update",
    DELETE_USER: "/api/delete-users/",
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
