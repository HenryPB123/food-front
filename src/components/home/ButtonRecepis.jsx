import React from "react";

const ButtonRecepis = ({ handleClick }) => {
  return (
    <button
      className="btn btn-warning rounded-start border border-white "
      onClick={handleClick}
    >
      Recipes
    </button>
  );
};

export default ButtonRecepis;
