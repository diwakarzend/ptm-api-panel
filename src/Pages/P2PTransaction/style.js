import styled from "styled-components";

export const Wrapper = styled.div`
  .flex {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }
  .label-name {
    font-weight: bold;
    min-width: 120px;
  }
  h5 {
    margin: 0;
  }
  .cursor-pointer {
    cursor: pointer;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  .form-group {
    flex: 0 0 240px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 0;
  }
  .form-action {
    .btn-common {
      margin-left: 20px;
    }
  }
`;
