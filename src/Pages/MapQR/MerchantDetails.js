import React, { useEffect, useState } from "react";
import {
  getVendorListing,
  postVendorListing,
  getUserDetails,
} from "../../utils/api";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import { Wrapper } from "./style";
import { convertBase64 } from "../../utils/common";
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
  const [controls, setControls] = useState([{ ...initPtpDto }]);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [user, setUser] = useState([]);

  useEffect(() => {
    const params = { pageNo: 1, pageSize: 100 };
    getVendorListing(params).then((res) => {
      if (res?.data && res?.data?.data) {
        SetVendor(res?.data?.data);
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessage({ type: "", text: "" });
      // setControls([{ ...initPtpDto }]);
    }, 5000);
  }, [message?.type]);

  // user Details
  useEffect(() => {
    getUserDetails().then((res) => {
      setUser(res?.data?.data);
      console.log("result", res);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ptpDTOList = JSON.parse(JSON.stringify(controls));
    ptpDTOList.forEach((dto) => {
      dto.userUUID = "234";
    });

    postVendorListing(ptpDTOList).then((res) => {
      if (res?.data) {
        const { success, msg, data } = res?.data;
        setMessage({ type: success ? "success" : "error", text: msg });
        if (data) {
          console.log("All is well");
          // setControls([{ ...initPtpDto }]);
        }
      }
    });
  };

  console.log("controls = ", controls);

  const dtoChangeHandler = (e, i) => {
    const { name, value } = e.target;
    const updateControls = JSON.parse(JSON.stringify(controls));
    updateControls[i][name] = value;
    setControls(updateControls);
  };

  const addMoreQrCodes = () => {
    const updateControls = JSON.parse(JSON.stringify(controls));
    updateControls.push({ ...initPtpDto });
    setControls(updateControls);
  };

  const removePtpDto = (i) => {
    const updateControls = JSON.parse(JSON.stringify(controls));
    updateControls.splice(i, 1);
    setControls(updateControls);
  };

  const handleFileRead = async (event, i) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    const updateControls = JSON.parse(JSON.stringify(controls));
    updateControls[i][event.target.name] = base64;
    setControls(updateControls);
  };

  return (
    <Wrapper className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Map QR" value="mapqr" />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <div className="card-body">
                <form onSubmit={handleSubmit} autoComplete="off">
                  <h3>Merchant Details</h3>
                  <div className="flex mercahnt-details row">
                    <div className="col">
                      <div className="label-name">Brand Name</div>
                      <div className="value">{user?.brnadName}</div>
                    </div>
                    <div className="col">
                      <div className="label-name">GST No.</div>
                      <div className="value">{user?.gstNo}</div>
                    </div>
                    <div className="col">
                      <div className="label-name">Address</div>
                      <div className="value">{user?.registerAddress}</div>
                    </div>
                    <div className="col">
                      <div className="label-name">Company</div>
                      <div className="value">{user?.registerCompany}</div>
                    </div>
                    <div className="col">
                      <div className="label-name">Website</div>
                      <div className="value">{user?.website}</div>
                    </div>
                  </div>
                  <h3>
                    Mapping Details
                    <span className={`${message?.type} message-text`}>
                      {message?.text}
                    </span>
                  </h3>
                  {controls.map((dto, i) => (
                    <>
                      <div className="flex mapping-dtails row">
                        <div className="col-4">
                          <div className="form-group">
                            <div className="file-control-wrapper">
                              <input
                                type="file"
                                placeholder="Upload QR Code"
                                name="qrDetails"
                                onChange={(e) => handleFileRead(e, i)}
                              />
                              <input
                                className="form-control search"
                                placeholder="Upload QR Code"
                                value={dto?.qrDetails}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="form-group">
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
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="VPA ID"
                              name="vpaId"
                              value={dto?.vpaId}
                              onChange={(e) => dtoChangeHandler(e, i)}
                            />
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Phone No."
                              name="phoneNo"
                              value={dto?.phoneNo}
                              onChange={(e) => dtoChangeHandler(e, i)}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Daily Limit"
                              name="dailyLimit"
                              value={dto?.dailyLimit}
                              onChange={(e) => dtoChangeHandler(e, i)}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Total Limit."
                              name="totalLimit"
                              value={dto?.totalLimit}
                              onChange={(e) => dtoChangeHandler(e, i)}
                            />
                          </div>
                        </div>
                        <div className="remove-it">
                          {i > 0 && (
                            <button
                              type="button"
                              className="btn btn-outline"
                              onClick={() => removePtpDto(i)}
                            >
                              <i className="ion-android-delete"></i>
                              Remove QR Codes
                            </button>
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
