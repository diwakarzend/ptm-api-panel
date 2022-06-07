import styled from "styled-components";

export const Wrapper = styled.div`
  .flex {
    display: flex;
  }
  .item-center {
    align-items: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-between {
    justify-content: space-between;
  }
  .form-control-wrap {
    .input-group {
      max-width: 180px;
      margin-right: 10px;
      position: relative;
      .form-control {
        width: 100%;
        padding-right: 40px;
        border-radius: 4px;
      }
      .input-group-append {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        z-index: 3;
      }
    }
    .input-group-text {
      background: none;
      border-width: 0;
      color: #555;
      opacity: 0.5;
    }
    select {
      max-width: 180px;
    }
  }
  .no-border {
    border-color: transparent;
  }
  label {
    margin-bottom: 0;
    margin-right: 10px;
  }
  .active {
    color: #06be00;
  }
  .inacive {
    color: #e30514;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .label-name {
    font-size: 13px;
  }
  .value {
    font-weight: 700;
  }
  .mercahnt-details,
  .mapping-dtails {
    margin-bottom: 30px;
  }
  .mapping-dtails {
    padding-top: 20px;
    border: 1px solid #e5e9ec;
    border-radius: 10px;
    box-shadow: 0 0 5px #e5e9ec;
    background-color: ghostwhite;
    position: relative;
    &.row {
      margin: 0 0 60px;
    }
    .remove-it {
      position: absolute;
      right: 0;
      top: calc(100% + 15px);
      button {
        border-radius: 4px;
        border: 1px solid #009fe3;
        height: 33px;
        color: #009fe3;
        font-size: 14px;
        font-weight: 400;
        padding: 0 15px;
        i {
          font-size: 16px;
          margin-right: 5px;
        }
      }
    }
  }
  .addmore-btn-wrap {
    margin-bottom: 40px;
    margin-top: -50px;
    display: flex;
    align-items: center;
    .btn {
      border-radius: 4px;
      border: 1px solid #009fe3;
      height: 33px;
      color: #009fe3;
      font-size: 14px;
      font-weight: 400;
      padding: 0 15px;
    }
    .max-char {
      font-size: 14px;
      margin-left: 10px;
    }
  }
  .message-text {
    margin-left: 50px;
    font-weight: 400;
    color: #0aaaba;
    &.error {
      color: #ff333c;
    }
  }
  .file-control-wrapper {
    position: relative;
    input[type="file"] {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .center {
    text-align: center;
  }
`;
