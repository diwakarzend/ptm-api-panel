import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import VendorTableHTML from "./VendorTableHTML";
import { getVendorDetailsByID } from "../../utils/api";
import { getQueryParams } from "../../utils/common";
import { Button, ModalWrapper } from "../../Components/UI/StyledConstants";
import { ChangeQrWrapper } from "./style";

const VendorList = () => {
  const [vendorData, setvendorData] = useState([]);
  const [modal, setModal] = useState(false);
  const [qrCode, setQrCode] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location?.search) {
      let queryParams = getQueryParams(location?.search);
      getVendorDetailsByID({
        pageNo: 1,
        pageSize: 1,
        uuid: queryParams?.uuid,
      }).then((res) => {
        setvendorData(res?.data?.data);
      });
    }
  }, [location]);

  return (
    <>
      <BreadCrumb heading="Vendor List" value="Vendor List" />
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">Vendor Table</h4>
        </div>
        <div className="card-body p16">
          <Button className="btn-success" as={Link} to="/mapqr-add">Add / Update</Button>
          <VendorTableHTML vendorData={vendorData} setModal={setModal} />
        </div>
      </div>
      {modal &&
        <ModalWrapper>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4>Change Active QR Code</h4>
              </div>
              <div className="modal-body">
                <ChangeQrWrapper>
                  <select
                    name="qrCode"
                    className="form-control"
                    onChange={(e) => setQrCode(e.target.value)}
                  >
                    <option value="">Select QR Code</option>
                    <option value="QR Code 1">QR Code 1</option>
                    <option value="QR Code 2">QR Code 2</option>
                    <option value="QR Code 3">QR Code 3</option>
                  </select>
                  <div className="qr-image flex item-center justify-center">
                    <img src="https://storage.googleapis.com/ptm-assets-prod/icons/yes-paytm.png" alt="" />
                  </div>
                  <div className="flex item-center justify-center">
                    <Button className="btn-success">Change QR Code</Button>
                  </div>
                </ChangeQrWrapper>
              </div>
            </div>
          </div>

        </ModalWrapper>
      }
    </>
  );
};

export default VendorList;
