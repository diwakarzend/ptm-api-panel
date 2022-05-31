import React, { useEffect, useState } from "react";
import { getVendorListing, postVendorListing } from "../../utils/api";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import { Wrapper } from "./style";
//import CSVExport from "../../Components/DataExport/CSVExport";

const initPtpDto = {
  qrDetails: null,
  vendorId: null,
  vpaId: null,
  phoneNo: null,
  dailyLimit: 0,
  totalLimit: 0,
};

const MerchantDetails = (props) => {
  const [vender, SetVendor] = useState([]);
  const [controls, setControls] = useState({
    vendorId: null,
    qrDataList: [{ ...initPtpDto }],
  });
  useEffect(() => {
    const params = { pageNo: 1, pageSize: 100 };
    getVendorListing(params).then((res) => {
      if (res?.data && res?.data?.data) {
        SetVendor(res?.data?.data);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      userUUID: "",
      qrDataList: controls.qrDataList,
    };
    postVendorListing(params).then((res) => {
      if (res?.data && res?.data?.data) {
        SetVendor(res?.data?.data);
        console.log("res = ", res);
      }
    });
  };

  const dtoChangeHandler = (e, i) => {
    const { name, value } = e.target;
    const updateControls = {
      ...controls,
    };
    updateControls.qrDataList[i][name] = value;
    setControls(updateControls);
  };

  const addMoreQrCodes = () => {
    const updateControls = {
      ...controls,
    };
    updateControls.qrDataList.push({ ...initPtpDto });
    setControls(updateControls);
  };

  const removePtpDto = (i) => {
    const updateControls = {
      ...controls,
    };
    updateControls.qrDataList.splice(i, 1);
    setControls(updateControls);
  };
  console.log("controls = ", controls);

  return (
    <Wrapper className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Map QR" value="mapqr" />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <h3>Merchant Details</h3>
                  <div className="flex mercahnt-details row">
                    <div className="col">
                      <div className="label-name">Merchant Name</div>
                      <div className="value">Sukhpal Singh</div>
                    </div>
                    <div className="col">
                      <div className="label-name">Merchant ID</div>
                      <div className="value">MUI587458R256</div>
                    </div>
                    <div className="col">
                      <div className="label-name">Store Name</div>
                      <div className="value">Radhe Radhe store</div>
                    </div>
                  </div>
                  <h3>Mapping Details</h3>
                  {controls.qrDataList.map((dto, i) => (
                    <>
                      <div className="flex mapping-dtails row">
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control search"
                            placeholder="Upload QR Code"
                            name="qrDetails"
                            value={dto?.qrDetails}
                            onChange={(e) => dtoChangeHandler(e, i)}
                          />
                        </div>
                        <div className="col-4">
                          <div className="col-4">
                            <select
                              className="form-control"
                              name="vendorId"
                              onChange={(e) => dtoChangeHandler(e, i)}
                            >
                              <option value="">Select Vendor</option>
                              {vender.map((option) => (
                                <option value={option?.id}>
                                  {option?.brandName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="VPA ID"
                            name="vpaId"
                            value={dto?.vpaId}
                            onChange={(e) => dtoChangeHandler(e, i)}
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone No."
                            name="phoneNo"
                            value={dto?.phoneNo}
                            onChange={(e) => dtoChangeHandler(e, i)}
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Daily Limit"
                            name="dailyLimit"
                            value={dto?.dailyLimit}
                            onChange={(e) => dtoChangeHandler(e, i)}
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Total Limit."
                            name="totalLimit"
                            value={dto?.totalLimit}
                            onChange={(e) => dtoChangeHandler(e, i)}
                          />
                        </div>
                        <div className="col-1">
                          {i > 0 && (
                            <button onClick={() => removePtpDto(i)}>del</button>
                          )}
                        </div>
                      </div>
                    </>
                  ))}

                  <div className="addmore-btn-wrap">
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => addMoreQrCodes()}
                    >
                      <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
                      Add more QR Codes
                    </button>
                    <div className="max-char">Maximum 6 QR Codes</div>
                  </div>
                  <button type="submit" className="btn btn-primary themebtn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default MerchantDetails;
