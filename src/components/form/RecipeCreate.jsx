/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addRecipes, getDiets } from "../../redux/actions/actions";
import "../home/home.scss";

export default function RecipeCreate() {
  const dispatch = useDispatch();
  const dietas = useSelector((state) => state.diets);

  const [input, setInput] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: 0,
    steps: [],
    dieta: [],
  });

  const [text, setText] = useState();
  const [indice, setIndice] = useState(1);

  const [errorName, setErrorName] = useState("");
  const [errorSummary, setErrorSummary] = useState("");
  const [errorHealth, setErrorHealth] = useState("");
  const [errorImage, setErrorImage] = useState("");
  const [errorSteps, setErrorSteps] = useState("");

  const validate = () => {
    if (input.name.length === 0) {
      setErrorName("Name required");
    } else {
      setErrorName("");
    }
    if (input.summary.length <= 0) {
      setErrorSummary("Summary required");
    } else {
      setErrorSummary("");
    }
    if (input.healthScore > 100 || input.healthScore < 1) {
      setErrorHealth("The healthscore must be in a range from 1 to 100");
    } else {
      setErrorHealth("");
    }
    if (input.image.length <= 0) {
      setErrorImage("Image required");
    } else {
      setErrorImage("");
    }
    if (input.steps.length === 0) {
      setErrorSteps("Step is required");
    } else {
      setErrorSteps("");
    }
  };

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  function handleSelect(e) {
    setInput({
      ...input,
      dieta: [...input.dieta, e.target.value],
    });
  }

  function handleSteps(e) {
    setText(e.target.value);
  }

  function handleClick(e) {
    let stringPasos = {};
    setIndice(indice + 1);
    stringPasos = { number: indice, step: text };
    setInput({
      ...input,
      steps: [...input.steps, stringPasos],
    });
    setText("");
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    validate();
  }, [input]);

  function deleteStep(name) {
    let pasos = [...input.steps];
    pasos = pasos.filter((p) => p.step.toLowerCase() !== name.toLowerCase());
    setInput({
      ...input,
      steps: pasos,
    });
  }

  function deleteDiet(dieta) {
    let dietas = [...input.dieta];
    dietas = dietas.filter((d) => d !== dieta);
    setInput({
      ...input,
      dieta: dietas,
    });
  }

  return (
    <div className="container-fluid  bg-black bg-opacity-75 p-5 text-warning   text-center mt-5">
      <div className="h1 text-center mb-5">CREATE RECIPE</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
          <div className=" row bg-dark p-3 mb-5">
            <div className="col-6">
              <div className="container text-start ms-5 ">
                <label htmlFor="1">
                  <strong>Name:</strong>
                </label>{" "}
                <br />
                <input
                  className="border border-warning rounded m-1 col-8"
                  key="name"
                  id="1"
                  placeholder="Name"
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {errorName && <p>{errorName}</p>}
              </div>

              <div className="container text-start ms-5">
                <label htmlFor="2">
                  <strong>Image:</strong>
                </label>
                <br />
                <input
                  className="border border-warning rounded m-1 col-8"
                  key="image"
                  placeholder="https://example.com"
                  id="2"
                  type="url"
                  value={input.image}
                  name="image"
                  pattern="https://.*"
                  onChange={(e) => handleChange(e)}
                />
                {errorImage && <p>{errorImage}</p>}
              </div>

              <div className="container text-start ms-5 ">
                <label htmlFor="3">
                  <strong>Summary:</strong>
                </label>
                <br />
                <textarea
                  className="border border-warning rounded m-1 col-8"
                  key="summary"
                  id="3"
                  placeholder="Summary..."
                  type="text"
                  value={input.summary}
                  name="summary"
                  rows="3"
                  onChange={(e) => handleChange(e)}
                />
                {errorSummary && <p>{errorSummary}</p>}
              </div>
            </div>

            <div className="col-6">
              <div className="container text-start ms-5 ">
                <label htmlFor="4">
                  <strong>HealthScore:</strong>
                </label>
                <br />
                <input
                  className="border border-warning rounded m-1 col-8"
                  key="healthScore"
                  id="4"
                  placeholder="'Score'"
                  type="number"
                  value={input.healthScore}
                  name="healthScore"
                  onChange={(e) => handleChange(e)}
                />
                {errorHealth && <p>{errorHealth}</p>}
              </div>
              <div className="container text-start ms-5 ">
                <label htmlFor="5">
                  <strong>Steps:</strong>
                </label>
                <br />
                <input
                  className="border border-warning rounded m-1 col-8"
                  key="steps"
                  id="5"
                  placeholder="steps..."
                  value={text}
                  name="steps"
                  onChange={(e) => handleSteps(e)}
                />
                <button
                  className="btn btn-warning btn-sm ms-2"
                  onClick={() => handleClick()}
                >
                  Add step
                </button>
                {errorSteps && <p>{errorSteps}</p>}
                {input.steps?.map((p, i) => (
                  <div key={i}>
                    {`${i + 1} - ${p.step}`}
                    <button onClick={() => deleteStep(p.step)}>X</button>
                  </div>
                ))}
              </div>
              <div className="container text-start ms-5 ">
                <label htmlFor="6">
                  <strong>Diets Types:</strong>{" "}
                </label>
                <br />
                <select
                  className="border border-warning rounded m-1 col-8"
                  id="6"
                  key="dieta"
                  value="recipes"
                  onChange={(e) => handleSelect(e)}
                >
                  {dietas?.map((e, i) => (
                    <option key={i} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                <div>Select one or more diets</div>
              </div>
              {input.dieta.length > 0 &&
                input.dieta.map((diet, i) => (
                  <div key={i}>
                    {diet}
                    <button
                      onClick={() => {
                        deleteDiet(diet);
                      }}
                    >
                      X
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="container">
          <button
            className="btn btn-warning me-5 col-3"
            disabled={
              errorName.length !== 0 ||
              errorSummary.length !== 0 ||
              errorSteps.length !== 0 ||
              errorHealth.length !== 0 ||
              errorImage.length !== 0
            }
            type="submit"
            onClick={() => {
              dispatch(addRecipes(input));
              alert("Recipe Created Successfully");
              setInput({
                name: "",
                image: "",
                summary: "",
                healthScore: 0,
                steps: [],
                dieta: [],
              });
            }}
          >
            Create recipe
          </button>

          <Link to={"/Home"}>
            <button className="btn btn-warning ms-5 col-3"> Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
