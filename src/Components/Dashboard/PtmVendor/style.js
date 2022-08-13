import styled from "styled-components";

export const UpiCollectionsStyle = styled.div`
  
  .filter-table {
    gap: 16px;
  }
  .upi-n-qr-collection {
    padding: 24px;
  }
  .collection-info-wrapper {
    background-color: rgb(171, 185, 232, .1);
    padding: 0 20px;
    border: 1px dashed rgb(171, 185, 232);
    border-radius: 10px;
  }
  .collection-info {
    padding: 20px 0;
    display: flex;
    & + .collection-info {
      border-top: 1px dashed rgb(171, 185, 232);
    }
    .info-left {
      flex: 1;
      strong {
        font-size: 32px;
        font-weight: 400;
      }
      .text {
        display: flex;
        align-items: center;
        &:before {
          content: "";
          width: 16px;
          height: 16px;
          border-radius: 3px;
          margin-right: 8px;
        }
        &.first {
          &:before {
            background-color: #3ac47d;
          }
        }
        &.second {
          &:before {
            background-color: rgb(41, 156, 219);
          }
        }
        &.third {
          &:before {
            background-color: rgb(247, 184, 75);
          }
        }
        &.fourth {
          &:before {
            background-color: #d92550;
          }
        }
      }
    }
    .info-right {
      flex: 0 0 80px;
      text-align: center;
      color: #3C80E8;
      border-radius: 4px;
      &.first {
        background-color: #d1f1e1;
      }
      &.second {
        background-color: rgb(41, 156, 219, 0.18);
      }
      &.third {
        background-color: rgb(247, 184, 75, 0.18);
      }
      &.fourth {
        background-color: #f9dde3;
      }
    }
  }
  .container-pie-chart {
    margin: 0 auto;
    max-width: 400px;
    canvas {
      max-height: 383px;
    }
  }
  .csv-link {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    background-color: #EAEEF2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
    font-size: 20px;
    transition: all 500ms ease-in-out;
    &:hover {
      background-color: rgb(41,156,219, .4);
      color: rgb(41,156,219, .8);
    }
  }
`;
