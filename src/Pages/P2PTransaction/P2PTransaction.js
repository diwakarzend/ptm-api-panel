import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { getP2pTxnListing } from "../../utils/api";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import TableHTML from "./TableHTML";
import CSVExport from "../../Components/DataExport/CSVExport";
import { FilterWrapper } from "./style";

const P2PTransaction = ({ dispatch = () => {}, ...props }) => {
  const [reportsItems, setReportsItems] = useState([]);
  const [filter, setFilter] = useState({
    status: "",
    txnRefId: "",
    txnType: "",
    userId: "",
    utrNumber: "",
    vendorCode: "",
  });
  const userData = useSelector((state) => state?.login?.userData || {});
  console.log("hiiii", userData);
  useEffect(() => {
    getListing();
  }, []);

  const getListing = () => {
    const params = {
      pagination: {
        pageNo: 1,
        pageSize: 500,
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
              <TableHTML
                filterItems={{}}
                reportsItems={reportsItems}
                pagingData={{}}
                dispatch={dispatch}
              />
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
