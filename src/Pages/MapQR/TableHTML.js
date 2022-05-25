import React, { Fragment, memo } from "react";
import Pagination from "../../Components/Pagination/Pagination";

const TableHTML = () => {
  return (
    <div className="card-body">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Merchant ID</th>
            <th scope="col">Merchant Name</th>
            <th scope="col">Payment Mode</th>
            <th scope="col">Store Name</th>
            <th scope="col">Created On</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">MUI587458R256</th>
            <td>SukhPal Singh</td>
            <td>Haveela Store</td>
            <td>Created On</td>
            <td>Status</td>
          </tr>
          <tr>
            <th scope="row">MUI587458R256</th>
            <td>SukhPal Singh</td>
            <td>Haveela Store</td>
            <td>Created On</td>
            <td>Status</td>
          </tr>
        </tbody>
      </table>
      <div>
        <Pagination />
      </div>
    </div>
  );
};
export default TableHTML;
