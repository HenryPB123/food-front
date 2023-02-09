import React from "react";
import { Link } from "react-router-dom";

const ButtonCreateRecipe = () => {
  return (
    <Link
      className="btn btn-warning pt-3 rounded-end border border-white me-3 "
      to="/recipeCreate"
    >
      Create Recipe
    </Link>
  );
};

export default ButtonCreateRecipe;
