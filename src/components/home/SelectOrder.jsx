import React from "react";

const SelectOrder = ({ handleSort }) => {
  return (
    <select className="form-select bg-warning" onChange={(e) => handleSort(e)}>
      <option value="">Orden</option>
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
    </select>
  );
};
export default SelectOrder;
