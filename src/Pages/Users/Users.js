import React, { useState, useEffect } from "react";
import Request from "../../utils/Request";
import APIS from "../../utils/urls";
import { fetchUsersList } from "../../actions/users";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import AddUserForm from "./AddUserForm";
import { connect } from "react-redux";

const Users = (props) => {
  const [isPopupVisible, handlePopUp] = useState(false);
  const [userToBeEdit, setUserId] = useState("");
  const [editUserData, setEditUserData] = useState("");
  const { dispatch } = props;

  const fetchUsersData = () => {
    dispatch(fetchUsersList());
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const editClickHandler = (userId) => {
    handlePopUp(true);
    setUserId(userId);
    const successHandler = (response, headers) => {
      console.log("success", response);
      if (response.success == true) {
        setEditUserData(response.data);
      }
    };

    const errorHandler = (error) => {
      console.log("errorerror", error);
    };

    const request = new Request("", successHandler, errorHandler, false);
    return request.get(
      `${APIS.login.BASE_URL}${APIS.User.EDIT_USER.replace("{userId}", userId)}`
    );
  };

  const openPopupHandler = () => {
    document.body.classList.add("modal-open");
    handlePopUp(true);
  };

  const closePopUpHandler = () => {
    setEditUserData("");
    document.body.classList.remove("modal-open");
    handlePopUp(false);
  };

  console.log("props111", props, editUserData);

  const { users } = props;

  const userData = users && users.usersList && users.usersList.data;

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Users" value="Users" />
          <div className="row">
            <div className=" col-sm-12">
              <div className="card card-shadow mb-4">
                <div className="card-header fund-modal">
                  <div className="card-title">Add User </div>
                  <button
                    type="button"
                    className="btn btn-secondary fund-btn"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={openPopupHandler}
                  >
                    Add User
                  </button>
                  {isPopupVisible ? (
                    <AddUserForm
                      closePopUpHandler={closePopUpHandler}
                      fetchUsersData={fetchUsersData}
                      props={props}
                      editUserData={editUserData}
                      userToBeEdit={userToBeEdit}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="card-header">
                  <div className="card-title">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-secondary">
                        Copy
                      </button>
                      <button type="button" className="btn btn-secondary">
                        CSV
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Excel
                      </button>
                      <button type="button" className="btn btn-secondary">
                        PDF
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Print
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table
                    id="bs4-table"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Id</th>

                        <th>Company Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {userData && Array.isArray(userData)
                        ? userData.map((item, index) => {
                            return (
                              <tr key={item.userName}>
                                <td>{index + 1}</td>
                                <td>{`${item.firstName} ${item.lastName}`}</td>
                                <td>{item.userName}</td>
                                <td>{item.email}</td>
                                <td
                                  onClick={() =>
                                    editClickHandler(item.userName)
                                  }
                                >
                                  Edit
                                </td>
                              </tr>
                            );
                          })
                        : ""}
                    </tbody>
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

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Users);
