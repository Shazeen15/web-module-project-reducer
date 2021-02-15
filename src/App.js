/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import reducer, { initialState } from "./reducers/index";

import { applyNumber, changeOperator } from "./actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAddOne = (num) => {
    dispatch(applyNumber(num));
  };
  const handleOperation = (op) => {
    dispatch(changeOperator(op));
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" alt="lambda" /> Lambda
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleAddOne(1)} />
              <CalcButton value={2} onClick={() => handleAddOne(2)} />
              <CalcButton value={3} onClick={() => handleAddOne(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleAddOne(4)} />
              <CalcButton value={5} onClick={() => handleAddOne(5)} />
              <CalcButton value={6} onClick={() => handleAddOne(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleAddOne(7)} />
              <CalcButton value={8} onClick={() => handleAddOne(8)} />
              <CalcButton value={9} onClick={() => handleAddOne(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation("+")} />
              <CalcButton value={"*"} onClick={() => handleOperation("*")} />
              <CalcButton value={"-"} onClick={() => handleOperation("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
