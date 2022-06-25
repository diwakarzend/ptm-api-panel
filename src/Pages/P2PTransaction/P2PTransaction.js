import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { getP2pTxnListing } from "../../utils/api";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import TableHTML from "./TableHTML";
import CSVExport from "../../Components/DataExport/CSVExport";
import Pagination from "../../Components/PaginationNew/PaginationNew/Pagination";
import { FilterWrapper } from "./style";
import { CSVLink } from "react-csv";

const P2PTransaction = ({ dispatch = () => {}, ...props }) => {
  const [reportsItems, setReportsItems] = useState([]);
  const [paging_data, setPagingData] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [filter, setFilter] = useState({
    status: "",
    txnRefId: "",
    txnType: "",
    userId: "",
    utrNumber: "",
    vendorCode: "",
  });
  const userData = useSelector((state) => state?.login?.userData || {});
  useEffect(() => {
    getListing(pageNo);
  }, []);

  const getListing = (page_no) => {
    const params = {
      pagination: {
        pageNo: page_no,
        pageSize: 20,
      },
    };
    if (userData?.role === "PTM_VENDOR") {
      params.userId = userData?.uuid;
    }
    Object.keys(filter).map((key) => {
      if (filter[key]) {
        params[key] = filter[key];
      }
    });
    getP2pTxnListing(params).then((res) => {
      setPagingData(res?.data?.data);
      setReportsItems(res?.data?.data?.content);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    filter[name] = value || null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getListing();
  };

  const getCurrentPageData = (page_no) => {
    console.log("page No", page_no);
    getListing(page_no);
  };

  console.log("paging_data = ", paging_data);

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb
            heading="P2P Transaction Report"
            value="P2P Transaction Report"
          />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <form onSubmit={handleSubmit}>
                <FilterWrapper className="form-group-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Transaction Id"
                      name="txnRefId"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="UTR Number"
                      name="utrNumber"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="txnType"
                      placeholder="Txn Type"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="userId"
                      placeholder="User Id"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="vendorCode"
                      placeholder="Vendor Code"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="status"
                      placeholder="Status"
                      onChange={handleChange}
                    >
                      <option value="">Status</option>
                      <option value="DONE">DONE</option>
                      <option value="INITIATED">INITIATED</option>
                      <option value="REJECTED">REJECTED</option>
                      <option value="PENDING">PENDING</option>
                      <option value="FAIL">FAIL</option>
                    </select>
                  </div>
                  <div className="form-action">
                    <input
                      type="submit"
                      className="btn-common"
                      value="Search"
                    />
                  </div>
                  <div className="form-group">
                    <CSVLink title="Download CSV" className="csv-link" data={reportsItems}>
                      <i class="fa fa-download " aria-hidden="true"></i>
                    </CSVLink>
                  </div>
                </FilterWrapper>
                  
              </form>
              {/* <div className="card-header">
                <div className="card-title">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <CSVExport dispatch={dispatch} />

                    <button
                      type="button"
                      className="btn-common"
                      onClick={() => {
                        window.print();
                      }}
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div> */}
              <TableHTML filterItems={{}} reportsItems={reportsItems} />
              {reportsItems && paging_data && (
                <Pagination
                  currentPage={
                    paging_data?.number >= 0 ? paging_data?.number + 1 : 1
                  }
                  totalPages={paging_data?.totalPages}
                  getCurrentPageData={getCurrentPageData}
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { payout: state.payout };
};

export default connect(mapStateToProps)(P2PTransaction);
