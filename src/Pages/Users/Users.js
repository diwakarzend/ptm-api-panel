import React, { useState, useEffect } from "react";
import Request from "../../utils/Request";
import APIS from "../../utils/urls";
import { fetchUsersList } from "../../actions/users";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import AddUserForm from "./AddUserForm";
import PermissionForm from "./PermissionForm";

import { connect } from "react-redux";
import { printPage, addOverlay, removeOverlay } from "../../utils/common";

const roleMapping = {
  PTM_VENDOR: "Vendor",
  PTM_ADMIN: "Admin",
  PTM_SUB_ADMIN: "Sub Admin",
};

const Users = (props) => {
  const [isPopupVisible, handlePopUp] = useState(false);
  const [userToBeEdit, setUserId] = useState("");
  const [editUserData, setEditUserData] = useState("");
  const [permissionData, setPermissionData] = useState({
    isPopupVisible: false,
    userId: "",
  });

  const { dispatch } = props;

  const fetchUsersData = () => {
    dispatch(fetchUsersList());
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const editClickHandler = (userId) => {
    handlePopUp(true);
    addOverlay();
    setUserId(userId);
    const successHandler = (response, headers) => {
      if (response.success == true) {
        setEditUserData(response.data);
      }
    };

    const errorHandler = (error) => {};

    const request = new Request("", successHandler, errorHandler, false);
    return request.get(
      `${APIS.login.BASE_URL}${APIS.User.EDIT_USER.replace("{userId}", userId)}`
    );
  };

  const permissionClickHandler = (userId) => {
    addOverlay();
    setPermissionData({ isPopupVisible: true, userId: userId });
  };

  const openPopupHandler = () => {
    document.body.classList.add("modal-open");
    handlePopUp(true);
  };

  const closePopUpHandler = () => {
    setEditUserData("");
    removeOverlay();
    document.body.classList.remove("modal-open");
    handlePopUp(false);
  };

  const closePermissionPopup = () => {
    setPermissionData({
      ...permissionData,
      userId: "",
      isPopupVisible: false,
    });
    removeOverlay();
  };

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
                  <div className="card-title"> </div>
                  <button
                    type="button"
                    className="btn-common"
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
                  {permissionData.isPopupVisible ? (
                    <PermissionForm
                      closePopUpHandler={closePermissionPopup}
                      userId={permissionData.userId}
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
                      <button type="button" className="btn-common">
                        CSV
                      </button>

                      <button
                        type="button"
                        className="btn-common"
                        onClick={() => printPage()}
                      >
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
                        <th>Role</th>
                        <th>Wallet</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {userData && Array.isArray(userData)
                        ? userData.map((item, index) => {
                            let userClass = "";
                            if (item.role && roleMapping[item.role]) {
                              userClass = roleMapping[item.role]
                                .toLowerCase()
                                .replace(" ", "-");
                            }

                            return (
                              <tr key={item.userName}>
                                <td>{index + 1}</td>
                                <td>{`${item.firstName} ${item.lastName}`}</td>
                                <td>{item.userName}</td>
                                <td>{item.email}</td>
                                <td className={userClass}>
                                  {roleMapping[item.role] || "NA"}
                                </td>
                                <td>Rs. {item.userBalance || "0"}</td>
                                <td className="done">Active</td>
                                <td>
                                  <div
                                    onClick={() =>
                                      editClickHandler(item.userName)
                                    }
                                    style={{ cursor: "pointer" }}
                                    title="update user"
                                  >
                                    Edit
                                  </div>
                                  <div
                                    onClick={() =>
                                      permissionClickHandler(item.userName)
                                    }
                                    title="Manage Permissions"
                                    style={{ cursor: "pointer" }}
                                  >
                                    | Permissions
                                  </div>
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
