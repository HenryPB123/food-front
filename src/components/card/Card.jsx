import React from "react";
import { Link } from "react-router-dom";

import photo from "../../img/cooking.png";
import "../card/card.scss";
// let prevId = 1;

export default function Card({ image, name, dietsType, healthScore, id }) {
  return (
    <div className="card bg-white bg-opacity-25 text-warning  border-white mb-3  card_con">
      {image ? (
        <img src={`${image}`} className="card-img-top" alt="..." />
      ) : (
        <img src={photo} className="card-img-top" alt="..." />
      )}
      <div className="card-body card_bo  ">
        <Link
          className=" text-decoration-underline text-warning "
          to={`/recipe/${id}`}
        >
          <h6 className="card-title fw-bolder">{name}</h6>
        </Link>

        <div className="h6 fw-bold">Diets:</div>
        <div className="card-text lh-1 p_con">
          {dietsType?.map((d, i) => {
            return <div key={i}> {d} </div>;
          })}
        </div>
        <p className="card-text ">HealthScore: {healthScore}</p>
      </div>
    </div>
  );
}
