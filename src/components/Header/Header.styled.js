import styled from "styled-components";
import { headerHeight } from "../../styles/variables";
import Header from "./Header";

export default styled(Header).attrs({})`
  width: 100%;
  height: ${headerHeight};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #262a35;
`;
