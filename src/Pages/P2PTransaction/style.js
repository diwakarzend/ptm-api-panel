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
  .credited, .synced {
    text-transform: uppercase;
  }
  .credited {
    color: rgb(64,81,137);
  }
  .synced {
    color: rgb(247,184,75);
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  position: relative;
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
    cursor: pointer;
    &:hover {
      background-color: rgb(41,156,219, .4);
      color: rgb(41,156,219, .8);
    }
  }
`;
