/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
// import style from "../style/nav.css";

const Nav = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/Home");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Recipes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className=" nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <SearchBar />
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search"></form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
