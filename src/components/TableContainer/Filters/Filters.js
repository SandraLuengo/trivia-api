import React, { useEffect, useState } from "react";
import { Select } from "../../../components";
import { filters } from "../../../languages/en";
import { useGlobalState } from "../../../state/useGlobalState";

const Filters = ({ className }) => {
  const [allFilter, setAllFilter] = useState(false);
  const [{ categories }] = useGlobalState();

  useEffect(() => {
    let fixedFilters = filters;
    categories &&
      !fixedFilters.includes(categories) &&
      fixedFilters.push(categories);
    categories && setAllFilter(fixedFilters);
  }, [categories, allFilter]);

  return (
    <div>
      {allFilter && allFilter.map(filter => <Select options={filter} />)}
      <button>Search</button>
    </div>
  );
};

export default Filters;
