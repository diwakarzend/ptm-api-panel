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
  .mercahnt-details {
    max-width: 650px;
  }
  .mercahnt-details,
  .mapping-dtails {
    margin-bottom: 30px;
  }
  .mapping-dtails {
    &.row {
      margin: 0 -8px 30px;
      .col {
        padding: 0 8px;
      }
    }
  }
  .addmore-btn-wrap {
    margin-bottom: 40px;
    max-width: calc(33.33% - 20px);
    .btn {
      border-radius: 4px;
      border: 1px solid #009fe3;
      height: 33px;
      color: #009fe3;
      width: 100%;
      font-size: 14px;
      font-weight: 400;
    }
    .max-char {
      font-size: 10px;
      margin-top: 4px;
    }
  }
`;
