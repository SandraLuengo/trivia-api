import styled from "styled-components";
import Filters from "./Filters";

export default styled(Filters).attrs({})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 3%;
  .btn {
    border: none;
    border-radius: 3px;
    padding: 0.8% 2%;
    margin-left: 10px;
    transition: background-color 0.3s ease-in-out;
    font-weight:bold;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
      background-color: grey;
    }
  }
`;
