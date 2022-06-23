import styled from "styled-components";

export const UpiCollectionsStyle = styled.div`
  .collection-info {
    border: 1px solid #c4c4c4;
    box-shadow: 0 0 5px 0 #0aaaba;
    padding: 16px 16px 8px 0;
    border-radius: 12px;
    display: flex;
    & + .collection-info {
      margin-top: 30px;
    }
    .info-left {
      flex: 0 0 80px;
      border-right: 2px solid #c4c4c4;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .info-right {
      flex: 1;
      text-align: center;
    }
  }
`;
