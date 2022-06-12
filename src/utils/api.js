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

export const getP2pUserListing = (params) => {
  return apiRequest.post(
    `${urls.login.BASE_URL + urls.ptp.GET_P2P_USER_DETAILS}`,
    params
  );
};

export const getMapqrListing = (params) => {
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.ptp.GET_MAPQR_LISTING}`,
    params
  );
};

export const getUserDetails = () => {
  console.log("inside user");
  return apiRequest.get(`${urls.login.BASE_URL + urls.user.GET_USER_DETAILS}`);
};

export const getVendorDetails = () => {
  console.log("inside user");
  return apiRequest.get(
    `${urls.login.BASE_URL + urls.user.GET_VENDOR_DETAILS}`
  );
};
