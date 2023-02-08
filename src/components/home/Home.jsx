import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import "../home/home.css";

import {
  filterByDiets,
  getRecetas,
  ordenByName,
  ordenByScore,
} from "../../redux/actions/actions";
import { SEARCH_RECIPE } from "../../redux/type/types";
import Select from "./Select";
import SelectOrder from "./SelectOrder";
import SelectScore from "./SelectScore";
import ButtonRecepis from "./ButtonRecepis";

let prevId = 1;

export const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recetas);
  const recipe = useSelector((state) => state.receta);
  const isActive = useSelector((state) => state.isActive);

  const [orden, setOrden] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  //estado local
  const [cardPerPage] = useState(9);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

  var currentData = allRecipes.slice(indexOfFirstCard, indexOfLastCard);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecetas());
  }, [dispatch]);

  function handleSort(e) {
    e.preventDefault();
    dispatch(ordenByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleScore(e) {
    e.preventDefault();
    dispatch(ordenByScore(e.target.value));
    setCurrentPage(1);
    setOrden(`Orden ${e.target.value}`);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch({ type: SEARCH_RECIPE, payload: [] });
    dispatch(getRecetas());
    setCurrentPage(1);
  }

  const handleFilter = (e) => {
    console.log("EE", e.target.value);
    dispatch(filterByDiets(e.target.value));
  };

  return (
    <div className="container1">
      <nav className="navbar navbar-dark bg-dark">
        <div className="input-group mb-3  m-3">
          <SearchBar />
          <ButtonRecepis handleClick={handleClick} />
          <SelectOrder handleSort={handleSort} />
          <SelectScore handleScore={handleScore} />
          <Select handleFilter={handleFilter} />{" "}
          <Link
            className="btn btn-warning me-4 border border-white"
            to="/recipeCreate"
          >
            Create Recipe
          </Link>
        </div>
      </nav>

      <div className="recipe">
        {recipe.length > 0 ? (
          recipe.map((r) => {
            return (
              <div className="card-container">
                <div className="recipe-card" key={prevId++}>
                  <div className="container-card">
                    <Card
                      image={r.image}
                      name={r.name}
                      dietsType={r.dietsType}
                      healthScore={r.healthScore}
                      id={r.id}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="card-container">
            {currentData?.map((r) => {
              return (
                <div className="recipe-card" key={prevId++}>
                  <div className="container-card">
                    <Card
                      key={r.id}
                      image={r.image}
                      name={r.name}
                      dietsType={
                        r.dietsType
                          ? r.dietsType.map((d) => <div>{d}</div>)
                          : r.diets?.map((d) =>
                              d.name.map((n) => <div>{n}</div>)
                            )
                      }
                      healthScore={r.healthScore}
                      id={r.id}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {isActive
        ? recipe.length > 8 && (
            <Pagination
              cardPerPage={cardPerPage}
              totalCards={allRecipes.length}
              pagination={pagination}
            />
          )
        : currentData && (
            <Pagination
              cardPerPage={cardPerPage}
              totalCards={allRecipes.length}
              pagination={pagination}
            />
          )}
    </div>
  );
};
export default Home;
