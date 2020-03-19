import React from "react";

const Select = ({ options }) => {
  return (
    <select>
      {options.map(option => (
        <option>{option}</option>
      ))}
    </select>
  );
};

export default Select;