import styled from "styled-components";
import Pagination from "./Pagination";

export default styled(Pagination).attrs({})`
  background-color: #00bc8c;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 4px;
  height: 8vh;
  margin: 3% 0;
  .numbers {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out;
    &:first-child {
      background-color: #00dba3;
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
    }
    &:hover {
      background-color: #00dba3;
      cursor: pointer;
    }
  }
`;
