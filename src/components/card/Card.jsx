import React from "react";
import { Link } from "react-router-dom";

import photo from "../../img/cooking.png";
import "../card/card.scss";
// let prevId = 1;

export default function Card({ image, name, dietsType, healthScore, id }) {
  return (
    <div className="card bg-white bg-opacity-10 text-white  border-white mb-3  card_con">
      {image ? (
        <img src={`${image}`} className="card-img-top" alt="..." />
      ) : (
        <img src={photo} className="card-img-top" alt="..." />
      )}
      <div className="card-body card_bo  ">
        <Link
          className=" text-decoration-none text-white "
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

    // <div className="card" style={{ width: "18rem" }}>
    //   {image ? (
    //     <img src={`${image}`} className="card-img-top" alt="..." />
    //   ) : (
    //     <img src={photo} className="card-img-top" alt="..." />
    //   )}

    //   <div className="card-body">
    //     <h5 className="card-title">{name}</h5>
    //   </div>

    //   <div class="card-text">
    //     {dietsType?.map((d, i) => {
    //       return <span key={i}> {d} </span>;
    //     })}
    //   </div>
    //   {/* <ul className="list-group list-group-flush">

    //     <li className="list-group-item">{dietsType}</li>
    //     <li className="list-group-item">A second item</li>
    //     <li className="list-group-item">A third item</li>
    //   </ul> */}
    //   <div className="card-body">
    //     <a href="#" className="card-link">
    //       Card link
    //     </a>
    //     <a href="#" className="card-link">
    //       Another link
    //     </a>
    //   </div>
    // </div>
  );
}

// export default function Card(props) {
//   return (
//     <div className="card-container-card">
//       <div>
//         {props.image ? (
//           <img className="image" src={`${props.image}`} alt="recipe"></img>
//         ) : (
//           <img className="image" src={photo} alt="recipe"></img>
//         )}
//       </div>
//       <div className="card-body">
//         <div>
//           <strong>{props.name}</strong>
//         </div>
//         <div>
//           <strong>Diets:</strong>

//           {props.dietsType?.map((d, i) => {
//             return <div key={i}> {d} </div>;
//           })}
//         </div>
//         <div>
//           <strong>HealthScore:</strong> {`${props.healthScore}`}
//         </div>
//       </div>
//     </div>
//   );
// }
