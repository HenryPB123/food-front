//] Input de búsqueda para encontrar recetas por nombre
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipesName } from "../../redux/actions/actions";

import "./searchbar.css";

export const SearchBar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleOnClick(e) {
    e.preventDefault();
    dispatch(searchRecipesName(name));
  }

  return (
    <form className="d-flex m-1 me-3 ">
      <input
        className="form-control me-2 border border-white"
        type="search"
        placeholder="Search"
        // aria-label="Search"
        onChange={(e) => handleInputChange(e)}
        value={name}
      />
      <button
        className="btn btn-warning border border-white"
        type="submit"
        onClick={(e) => handleOnClick(e)}
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
