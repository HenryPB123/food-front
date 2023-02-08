/* eslint-disable react/style-prop-object */
import React from "react";
import { useHistory } from "react-router-dom";

import "../landing/styles.scss";

const LandingPage = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/Home");
  };
  return (
    <div className="col container bg-dark bg-opacity-50 rounded-3 my_con  ">
      <div className="row my_con1">
        <h1 className="text-center ">Wellcome to Food App</h1>
      </div>
      <div className="row display-1  ">
        <div className=" col-6 d-grid  position-absolute top-50 start-50 translate-middle">
          <button
            className=" btn btn-outline-warning btn-lg fs-1 mt-5"
            onClick={() => handleClick()}
          >
            ENTER
          </button>
        </div>
      </div>
    </div>
    // <div className="container-fluid">
    //   <div class="row ">
    //     <div className="col align-self-center">
    //       <h1>Wellcome to Food App</h1>
    //       <button
    //         className="btn btn-outline-warning btn-lg fs-1"
    //         onClick={handleClick}
    //       >
    //         ENTER
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LandingPage;
