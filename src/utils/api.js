import Request from "./Request";
import urls from "./urls";

const apiRequest = new Request(
  () => {},
  () => {},
  () => {}
);

export const getVendorListing = (params) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.ptp.GET_VENDOR_LISTING}`,
    params
  );
};
export const postVendorListing = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.POST_VENDOR_LISTING}`,
    params
  );
};

export const getP2pTxnListing = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.GET_P2P_TXT_DETAILS}`,
    params
  );
};

export const getVendorDetails = (params) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.ptp.GET_MAPQR_LISTING}`,
    params
  );
};

export const getUserDetails = (mobile) => {
  console.log("inside user");
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.user.GET_USER_DETAILS}/${mobile}`
  );
};

export const getMapqrListing = () => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.user.GET_VENDOR_DETAILS}`
  );
};

export const getVendorDetailsByID = (params) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.ptp.GET_MAPQR_LISTING}/${
      params.uuid
    }?pageNo=${params.pageNo}&pageSize=${params.pageSize}`
  );
};

export const uploadMapqrRequest = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.UPLOAD_MAPQR_REQUEST}`,
    params
  );
};

export const getDashboardUserTxnRequest = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.GET_DASHBOARD_USER_TXN}`,
    params
  );
};

export const getUserByVendorRole = (pageNo = 0, pageSize = 20) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.user.GET_USER_BY_VENDOR_ROLE}?pageNo=${pageNo}&pageSize=${pageSize}`, 
  );
}

export const AddBankEntityRequest = (params, isUpdate = false) => {
  let url = urls.ptp.ADD_BANK_ENTITY
  if(isUpdate) {
    url = urls.ptp.UPDATE_BANK_ENTITY;
  }
  return apiRequest.post(
    `${urls.login.BASE_URL + url}`,
    params
  );
};

export const getBankEntitiesRequest = (params) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.ptp.GET_BANK_ENTITY}/${params.userUUID}?pageNo=${params.pageNo}&pageSize=${params.pageSize}`, 
  );
}

export const bulkUploadTransactionsRequest = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.BULK_UPLOAD_TRANSACTIONS_REQUEST}`,
    params
  );
};


