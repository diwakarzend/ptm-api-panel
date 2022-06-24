import styled from "styled-components";

export const UpiCollectionsStyle = styled.div`
  .item-center {
    align-items: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-between {
    justify-content: space-between;
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
            background-color: rgb(10, 179, 156);
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
            background-color: rgb(64, 81, 137);
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
        background-color: rgba(10, 179, 156, 0.18);
      }
      &.second {
        background-color: rgb(41, 156, 219, 0.18);
      }
      &.third {
        background-color: rgb(247, 184, 75, 0.18);
      }
      &.fourth {
        background-color: rgb(64, 81, 137, 0.18);
      }
    }
  }
  .container-pie-chart {
    margin: 0 auto;
  }
`;
