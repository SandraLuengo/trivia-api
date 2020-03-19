import styled from "styled-components";
import { headerHeight } from "../../styles/variables";
import TableContainer from "./TableContainer";

export default styled(TableContainer).attrs({})`
  height: calc(100vh - ${headerHeight});
  padding-top:3vh;
  background-color: #383e4e;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
`;
