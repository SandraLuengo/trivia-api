import styled from "styled-components";
import Table from "./Table";

export default styled(Table).attrs({})`
  width: 80%;
  color: white;
  .table {
    width: 100%;
    border-collapse: collapse;
    background-color: #1b1b1b;
    &__created {
      color: #0ce3ac;
    }
    thead {
      background-color: #2c2c2c;
      font-weight: bold;
    }
    th {
      padding: 1%;
      text-align: center;
    }
    td {
      padding: 1%.68%;
    }
    th,
    td {
      border: 1px solid #464545;
    }
  }
`;
