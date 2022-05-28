import Request from "./Request";
import urls from "./urls";

const apiRequest = new Request(
  () => {},
  () => {},
  () => {}
);

export const getVendorListing = (params) => {
  return apiRequest.get(`${urls.ptp.GET_VENDOR_LISTING}`, params);
};
export const postVendorListing = (params) => {
  return apiRequest.post(`${urls.ptp.POST_VENDOR_LISTING}`, params);
};
