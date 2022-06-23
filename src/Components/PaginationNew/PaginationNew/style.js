import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const pagination = styled.div`
  margin: 20px auto;
  border-radius: 5px;
  text-align: center;

  .next-btn,
  .prev-btn {
    width: 50px;
    height: 100%;
    position: relative;
    cursor: pointer;
    border: 0;
    font-size: 12px;
    letter-spacing: 0.6px;
    color: #1974ef;
    &.disabled {
      cursor: not-allowed;
      color: #e8e8e8;
    }
  }

  .next-btn {
    &:before {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      transform: rotate(45deg);
      top: 0;
      right: 4px;
      bottom: 0;
      margin: auto;
    }
  }
  .prev-btn {
    &:before {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      transform: rotate(45deg);
      left: 2px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .prev-btn {
    &:before {
      border-left: 1px solid #0190fe;
      border-bottom: 1px solid #0190fe;
    }
    &.disabled {
      &:before {
        border-color: #e8e8e8;
      }
    }
  }
  .next-btn {
    &:before {
      border-right: 1px solid #0190fe;
      border-top: 1px solid #0190fe;
    }
    &.disabled {
      &:before {
        border-color: #e8e8e8;
      }
    }
  }
  .pagination-nav {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background-color: #deedfd;
    font-size: 10px;
    letter-spacing: 0.3px;
    color: #1974ef;
    text-align: center;
    margin: 0 2px;
    border: 0;
    padding: 0;
    &.active {
      box-shadow: 0 2px 4px 0 rgba(199, 199, 199, 0.5);
      background-color: #1974ef;
      color: #fff;
    }
    &.disabled {
      cursor: not-allowed;
      background: transparent;
    }
  }
  .threeLine {
    color: #1a73e8;
    font-size: 16px;
    padding-left: 2px;
    .pagination-nav {
      margin-left: 3px;
    }
  }
`;
