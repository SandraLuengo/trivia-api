import styled from "styled-components";
import HeaderItem from "./HeaderItem";

export default styled(HeaderItem).attrs({})`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.4% 1%;
  margin-right: 1%;
  background-color: #0f1115;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 0.8rem;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #5c6378;
    cursor: pointer;
  }

  .logo {
    margin-right: 5px;
  }
`;
