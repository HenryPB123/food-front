import React from "react";

const SelectScore = ({ handleScore }) => {
  return (
    <select
      className="form-select bg-warning border border-white"
      onChange={(e) => handleScore(e)}
    >
      <option value="score">HealthScore</option>
      <option value="Min">Min to Max Score</option>
      <option value="Max">Max to Min Score</option>
    </select>
  );
};
export default SelectScore;
