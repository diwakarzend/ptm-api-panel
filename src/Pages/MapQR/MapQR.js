import React, { useState, useEffect } from "react";
//import { connect } from "react-redux";
//import { fetchTransactionReport } from "../../actions/payout";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import TableHTML from "./TableHTML";
import { Wrapper } from "./style";
import { getMapqrListing } from "../../utils/api";
//import CSVExport from "../../Components/DataExport/CSVExport";
``;
const MapQR = (props) => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    getMapqrListing({ pageNo: 1, pageSize: 100 }).then((res) => {
      setListData(res?.data?.data);
    });
  }, []);

  return (
    <Wrapper className="container_full">
      {/* <SideBar {...props} /> */}
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Merchant List" value="Merchant List" />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <TableHTML listData={listData} />
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default MapQR;
