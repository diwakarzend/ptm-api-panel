import React from "react";
import Pagination from "../../Components/Pagination/Pagination";

const TableHTML = ({ listData = [] }) => {
  return (
    <div className="card-body">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User UUID</th>
            <th scope="col">Vendor Id</th>
            <th scope="col">VPA Id</th>
            <th scope="col">Phone No</th>
          </tr>
        </thead>
        <tbody>
          {listData && listData.lengths > 0 ? (
            listData.map((item, index) => (
              <tr key={index}>
                <td>{item?.id}</td>
                <td>{item?.userUUID}</td>
                <td>{item?.vendorId}</td>
                <td>{item?.vpaId}</td>
                <td>{item?.phoneNo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="center">
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
