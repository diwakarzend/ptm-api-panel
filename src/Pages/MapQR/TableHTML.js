import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
const TableHTML = ({ listData = [] }) => {
  return (
    <div className="card-body">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Role</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listData && listData.length > 0 ? (
            listData
              .filter((item) => item.role === "PTM_VENDOR")
              .map((item, index) => (
                <tr key={item.userName}>
                  <td>{index + 1}</td>
                  <td>{`${item.firstName} ${item.lastName}`}</td>
                  <td>{item.userName}</td>
                  <td>{item.email}</td>
                  <td className="vendor">
                    {item.role.replace("PTM_VENDOR", "Vendor")}
                  </td>
                  <td>{item.userBalance}</td>
                  <td>
                    <Link
                      to={`vendor-list?uuid=${item.uuid || "1"}`}
                      className="cursor-pointer"
                    >
                      <i className="icon-eye" />
                    </Link>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan={7} className="center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <Pagination />
      </div>
    </div>
  );
};
export default TableHTML;
