import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import imagen from "../../img/cooking.png";
import { Clean, getDetails } from "../../redux/actions/actions";

export const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailRecipe = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(id));
    return () => {
      dispatch(Clean());
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      key={detailRecipe.id}
      className="container-fluid bg-black bg-opacity-75 p-5 text-warning   "
    >
      {detailRecipe ? (
        <div className="container col-8 border border-warning">
          <div className="h1 text-center p-3">{detailRecipe.name}</div>
          <hr />
          {detailRecipe.image ? (
            <div className="text-center mb-3">
              <img className="rounded" src={detailRecipe.image} alt="recipe" />
            </div>
          ) : (
            <div className="text-center mb-3">
              <img className="rounded" src={imagen} alt="recipe" />
            </div>
          )}
          <hr />
          <div className="container col-12 bg-white bg-opacity-10 p-5 pb-3 pt-1 mb-3 ">
            <div className="m-1">
              <strong>DishTypes</strong>: {`${detailRecipe.dishTypes}`}
            </div>

            <div className="m-1">
              <strong>DietsType</strong>:
              {detailRecipe.dietsType
                ? detailRecipe.dietsType.map((d) => <span> {`  ${d}`},</span>)
                : detailRecipe.diets?.map((d) =>
                    d.name.map((n) => <span> {`  ${n} -`},</span>)
                  )}
            </div>

            <div className="m-1">
              <strong>HealthScore</strong>: {`${detailRecipe.healthScore}`}
            </div>

            <div className="m-1">
              <strong>Summary</strong>:{" "}
              {`${detailRecipe.summary?.replace(/<[^>]*>/g, "")}`}
            </div>

            <div className="m-1">
              <strong>Steps</strong>
              <ul>
                {detailRecipe.steps &&
                  detailRecipe.steps.map((d, i) =>
                    typeof d !== "object" ? (
                      <li key={i}> {d} </li>
                    ) : (
                      <li key={i}> {`${d.number} - ${d.step} `} </li>
                    )
                  )}
              </ul>
            </div>
            <div className="text-center mb-0">
              <Link to="/Home" className="d-grid gap-2  text-decoration-none">
                <button className="btn btn-warning fw-bolder fs-2 ">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">Loading...</div>
      )}
    </div>
  );
};

export default Details;
