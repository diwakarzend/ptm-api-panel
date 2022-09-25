import React, { useEffect, memo, useState } from "react";

import { connect } from "react-redux";
import { fetchBeneficiary } from "../../actions/beneficiary";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import BenificiaryForm from "./BenificiaryForm";
import QuickPaymentForm from "../Payout/QuickPaymentForm";
import { addOverlay, removeOverlay, hideMessage, printPage } from "../../utils/common";
import { Button, TableWrapper } from "../../Components/UI/StyledConstants";

const Benificiary = memo((props) => {
  const { dispatch, login, beneficiary } = props;
  const userRole = login && login.userData && login.userData.role;
  const [isPopupVisible, handlePopUp] = useState(false);
  const [statusMessage, setStatus] = useState("");
  const [isQuickPopupVisible, handleQuickPopUp] = useState(false);
  const [payeeInfo, setPayeeInfo] = useState("");
  const [editUserData, setEditUserData] = useState("");
  const benificiaryItems =
    beneficiary && beneficiary.items && beneficiary.items.data;

  useEffect(() => {
    getBeneficiary();
  }, []);

  useEffect(() => {
    hideMessage(statusMessage, setStatus);
  }, [statusMessage]);

  const getBeneficiary = () => {
    dispatch(fetchBeneficiary());
  };

  const closePopUpHandler = () => {
    removeOverlay();
    handlePopUp(false);
  };

  const openPopupHandler = () => {
    addOverlay();
    handlePopUp(true);
    setEditUserData("");
  };

  const closeQuickPopUpHandler = () => {
    removeOverlay();
    handleQuickPopUp(false);
  };

  const openQuickPopupHandler = (accountNumber) => {
    addOverlay();
    handleQuickPopUp(true);
    let payeeData = "";
    if (
      benificiaryItems &&
      Array.isArray(benificiaryItems) &&
      benificiaryItems.length > 0
    ) {
      payeeData = benificiaryItems.filter(
        (item) => item.accountNumber == accountNumber
      );
      if (payeeData.length > 0) {
        setPayeeInfo(payeeData[0]);
      }
    }
  };

  const editPopupHandler = (item) => {
    const itemCopy = JSON.parse(JSON.stringify(item));
    itemCopy.mobileNumber = itemCopy.mobile;
    delete itemCopy.mobile;
    setEditUserData(itemCopy);
    handlePopUp(true);
    addOverlay();
  };

  return (
    <>
      <BreadCrumb heading="Beneficiary" value="Beneficiary" />
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        {statusMessage}
      </div>
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">Beneficiary</h4>
          <div className="flex gap4">
            <Button className="btn-soft-success">Copy</Button>
            <Button className="btn-soft-success">CSV</Button>
            <Button className="btn-soft-success">Excel</Button>
            <Button className="btn-soft-success">PDF</Button>
            <Button className="btn-soft-success" onClick={printPage}>Print</Button>
          </div>
        </div>
        <div className="card-body p16">
          <div className="flex space-between">
            {userRole !== "PTM_ADMIN" && (
              <Button
                className="btn-success"
                onClick={openPopupHandler}
              >
                Add Beneficiary
              </Button>
            )}
          </div>
          <TableWrapper>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Bank Name</th>
                  <th scope="col">Account No</th>
                  <th scope="col">IFSC</th>
                  <th scope="col">Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {benificiaryItems &&
                  Array.isArray(benificiaryItems) &&
                  benificiaryItems.length > 0 ? (
                  benificiaryItems.map((item, index) => {
                    return (
                      <tr key={item.reqstDate}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.mobile}</td>
                        <td>{item.bankName}</td>
                        <td>{item.accountNumber}</td>
                        <td>{item.ifscCode}</td>
                        <td className={item.status.toLowerCase()}>
                          {item.status}
                        </td>
                        <td>
                          <div className="flex flex-center">
                            <i
                              onClick={() =>
                                openQuickPopupHandler(item.accountNumber)
                              }
                              className="fa fa-rupee"
                              style={{
                                fontSize: "22px",
                                marginRight: "10px",
                                cursor: "pointer",
                              }}
                              title="Quick Pay"
                            />
                            <i
                              style={{
                                fontSize: "18px",
                              }}
                            >
                              |
                            </i>
                            <i
                              class="icon-pencil"
                              onClick={() => editPopupHandler(item)}
                              title="Edit user"
                              style={{
                                fontSize: "17px",
                                marginLeft: "10px",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center" }}>
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </TableWrapper>
        </div>
      </div>
      {isPopupVisible && (
        <BenificiaryForm
          isPopupVisible={isPopupVisible}
          closePopUpHandler={closePopUpHandler}
          userRole={userRole}
          getBeneficiary={getBeneficiary}
          setStatus={setStatus}
          editUserData={editUserData}
        />
      )}

      {isQuickPopupVisible && (
        <QuickPaymentForm
          isQuickPopupVisible={isQuickPopupVisible}
          closeQuickPopUpHandler={closeQuickPopUpHandler}
          benificiaryData={payeeInfo}
        />
      )}
    </>
  );
});

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Benificiary);
