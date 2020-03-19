import React from "react";
import { Filters, Table, Pagination } from ".././../components";

const TableContainer = ({ className }) => {
  return (
    <div className={className}>
      <Filters />
      <Table />
      <Pagination />
    </div>
  );
};

export default TableContainer;
