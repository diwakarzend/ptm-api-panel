import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

const Users = (props) => {
  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <BreadCrumb heading="Users" value="Users" />
        <div class="container-fluid">
          <div class="row">
            <div class=" col-sm-12">
              <div class="card card-shadow mb-4">
                <div class="card-header">
                  <div class="card-title">
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-secondary">
                        Copy
                      </button>
                      <button type="button" class="btn btn-secondary">
                        CSV
                      </button>
                      <button type="button" class="btn btn-secondary">
                        Excel
                      </button>
                      <button type="button" class="btn btn-secondary">
                        PDF
                      </button>
                      <button type="button" class="btn btn-secondary">
                        Print
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <table
                    id="bs4-table"
                    class="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Diwakar</td>
                        <td>Apna Kaam</td>
                        <td>9999999999</td>
                        <td>Diwakar@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Rahul</td>
                        <td>Apna Kaam</td>
                        <td>9999999998</td>
                        <td>rahul@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Manish</td>
                        <td>Apna Kaam</td>
                        <td>9999999997</td>
                        <td>manish@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Ravi</td>
                        <td>Apna Kaam</td>
                        <td>9999999996</td>
                        <td>ravi@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Diwakar</td>
                        <td>Apna Kaam</td>
                        <td>9999999999</td>
                        <td>Diwakar@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Rahul</td>
                        <td>Apna Kaam</td>
                        <td>9999999998</td>
                        <td>rahul@gmail.com</td>
                        <td>Edit</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
