import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
//import { connect } from "react-redux";
//import { fetchTransactionReport } from "../../actions/payout";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import VendorTableHTML from "./VendorTableHTML";
import { Wrapper } from "./style";
import { getVendorDetailsByID } from "../../utils/api";
import { getQueryParams } from "../../utils/common";
//import CSVExport from "../../Components/DataExport/CSVExport";

const VendorList = (props) => {
  const [vendorData, setvendorData] = useState([]);
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
    <Wrapper className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Vendor List" value="Vendor List" />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <div className="card-header justify-end">
                <div className="card-title">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Link to="/mapqr-add" class="btn btn-primary themebtn">
                      Add / Update
                    </Link>
                  </div>
                </div>
              </div>
              <VendorTableHTML vendorData={vendorData} />
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default VendorList;
