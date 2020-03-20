import React, { useState } from "react";
import { Select } from "../../../components";
import { filters } from "../../../languages/en";
import { useGlobalState } from "../../../state/useGlobalState";
import { getFilteredQuestions } from "../../../services/questionsService";

const updateQuestions = (selectedFilters, dispatch) => {
  getFilteredQuestions(selectedFilters).then(questions =>
    dispatch({ type: "SET_QUESTIONS", newValue: questions })
  );
};

const Filters = ({ className }) => {
  let filterObj = { category: "", type: "", difficulty: "" };
  const [selectedFilters, setSelectedFilters] = useState(filterObj);
  const [{}, dispatch] = useGlobalState();

  return (
    <div className={className}>
      {filters.map((filter, i) => (
        <Select
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          key={`select-${i}`}
          id={Object.keys(filter)}
          options={Object.values(filter)}
        />
      ))}
      <button
        onClick={() => updateQuestions(selectedFilters, dispatch)}
        className="btn"
      >
        Search
      </button>
    </div>
  );
};

export default Filters;
