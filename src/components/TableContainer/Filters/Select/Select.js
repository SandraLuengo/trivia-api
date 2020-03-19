import React from "react";

const Select = ({
  options,
  id,
  className,
  selectedFilters,
  setSelectedFilters
}) => {
  const handleChange = ({ target }) => {
    setSelectedFilters({ ...selectedFilters, [target.id]: target.value });
  };
  return (
    <select id={id} onChange={e => handleChange(e)} className={className}>
      <option key="all" value="">
        {`All ${id}`}
      </option>
      {options[0].map(option => (
        <option key={option} value={option==='true/false'?'boolean':option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
