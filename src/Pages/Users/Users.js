import React, { useState, useEffect } from "react";
import Request from "../../utils/Request";
import APIS from "../../utils/urls";
import { fetchUsersList } from "../../actions/users";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import AddUserForm from "./AddUserForm";
import PermissionForm from "./PermissionForm";
import AdminFundForm from "./AdminFundForm";

import { connect } from "react-redux";
import { printPage, addOverlay, removeOverlay } from "../../utils/common";

const roleMapping = {
  PTM_VENDOR: "Vendor",
  PTM_ADMIN: "Admin",
  PTM_SUB_ADMIN: "Sub Admin",
};

const styles = {
  iconContainer: {
    padding: "10px",
  },
  bulbContainer: {
    N: {
      color: "gray",
      padding: "10px",
    },
    Y: { color: "green", padding: "10px" },
  },
};

const Users = (props) => {
  const [isPopupVisible, handlePopUp] = useState(false);
  const [userStatus, setUserStatus] = useState({
    userName: "",
    msg: "",
    status: "",
  });

  const [showPhoneNumberField, setShowPhoneNumberField] = useState();
  const [statusMsg, setStatusMsg] = useState("");

  const [userToBeEdit, setUserId] = useState("");
  const [editUserData, setEditUserData] = useState("");
  const [permissionData, setPermissionData] = useState({
    isPopupVisible: false,
    userId: "",
  });

  const [adminFormData, setAdminFormData] = useState("");

  const { dispatch } = props;

  const fetchUsersData = () => {
    dispatch(fetchUsersList());
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const editClickHandler = (userId) => {
    setShowPhoneNumberField(false);
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

  const adminFundFormHandler = (userId) => {
    addOverlay();
    setAdminFormData(userId);
  };

  const permissionClickHandler = (userId) => {
    addOverlay();
    setPermissionData({ isPopupVisible: true, userId: userId });
  };

  const openPopupHandler = () => {
    document.body.classList.add("modal-open");
    setShowPhoneNumberField(true);
    handlePopUp(true);
  };

  const handleUserStatus = (userId, curentStatus) => {
    const status = curentStatus == "N" ? "Y" : "N";

    const successHandler = (response) => {
      console.log("responseresponse", response);
      if (response.success) {
        const msg = status == "N" ? "deactivated" : "activated";
        setUserStatus({
          userName: userId,
          status: status,
          msg: `This user is now ${msg}`,
        });
      }
    };

    const errorHandler = (error) => {};

    const request = new Request("", successHandler, errorHandler, false);
    const params = `?userId=${userId}&status=${status}`;
    return request.put(
      `${APIS.login.BASE_URL}${APIS.User.MANAGE_USER_STATUS}${params}`
    );
  };

  const closeAdminFundPopUpHandler = () => {
    setAdminFormData("");
    removeOverlay();
    document.body.classList.remove("modal-open");
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

  let userData = users && users.usersList && users.usersList.data;

  if (userData) {
    userData = userData.map((item) => {
      if (item.userName == userStatus.userName) {
        item.isActive = userStatus.status;
      }
      return item;
    });
  }

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
                      showPhoneNumberField={showPhoneNumberField}
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

                {adminFormData ? (
                  <AdminFundForm
                    userId={adminFormData}
                    closeAdminFundForm={closeAdminFundPopUpHandler}
                    setStatusMsg={setStatusMsg}
                    successCallBack={fetchUsersData}
                  />
                ) : (
                  ""
                )}
                <div className="done">{statusMsg}</div>
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
                        <th>Hold Amount</th>
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
                            console.log(item);

                            let status = item.isActive;

                            // if (userStatus.userName == item.userName) {
                            //   status = userStatus.status;
                            // }

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
                                {/* <td className="done">
                                  {item.isActive == "Y"
                                    ? "Active"
                                    : "In Active"}
                                </td> */}
                                <td>
                                  {item.holdBalance
                                    ? "Rs." + item.holdBalance
                                    : "-"}
                                </td>
                                <td>{`${
                                  item.isActive == "N" ? "Inactive" : "Active"
                                }`}</td>
                                <td>
                                  {userStatus.userName == item.userName && (
                                    <div
                                      className="done"
                                      style={{
                                        position: "absolute",
                                        marginTop: "-11px",
                                      }}
                                    >
                                      {userStatus.msg}
                                    </div>
                                  )}
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <div style={styles.iconContainer}>
                                      <i
                                        class="icon-pencil"
                                        onClick={() =>
                                          editClickHandler(item.userName)
                                        }
                                        style={{ cursor: "pointer" }}
                                        title="update user"
                                      ></i>
                                    </div>
                                    {/* | */}
                                    <div style={styles.iconContainer}>
                                      <i
                                        class="icon-key"
                                        onClick={() =>
                                          permissionClickHandler(item.userName)
                                        }
                                        title="Manage Permissions"
                                        style={{ cursor: "pointer" }}
                                      ></i>
                                    </div>
                                    {/* | */}
                                    <div style={styles.iconContainer}>
                                      <i
                                        className="icon-plus"
                                        title="Add Fund"
                                        onClick={() => {
                                          console.log("successful");
                                          adminFundFormHandler(item.userName);
                                        }}
                                      ></i>
                                    </div>
                                    {/* | */}
                                    <div
                                      style={styles.bulbContainer[status]}
                                      onClick={() =>
                                        handleUserStatus(item.userName, status)
                                      }
                                    >
                                      <i
                                        className="icon-bulb"
                                        style={{ fontWeight: "bold" }}
                                        title={`${
                                          item.isActive == "N"
                                            ? "Active"
                                            : "Inactive"
                                        }`}
                                      ></i>
                                    </div>
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
