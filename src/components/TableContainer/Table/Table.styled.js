import styled from "styled-components";
import Table from "./Table";

export default styled(Table).attrs({})`
  width: 80%;
  color: white;
  .table {
    width: 100%;
    border-collapse: collapse;
    background-color: #1b1b1b;
    &__sort {
      color: #0ce3ac;
      &:hover {
        cursor: pointer;
      }
    }
    &__id {
      width: 5%;
      max-width: 5%;
      text-align:center;
    }
    &__category {
      width: 10%;
      max-width: 10%;
    }
    &__type {
      width: 10%;
      max-width: 10%;
    }
    &__difficulty {
      width: 15%;
      max-width: 15%;
    }
    &__question {
      width: 50%;
      max-width: 50%;
    }
    &__created {
      width: 10%;
      max-width: 10%;
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
