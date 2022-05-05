import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  const [numOne, setNumOne] = useState("");
  const [numtwo, setNumtwo] = useState("");
  const [method, setMethod] = useState("+");
  const [answer, setAnswer] = useState(0);
  const updateNumone = (num) => setNumOne(Number(numOne + num));
  const updateNumtwo = (num) => setNumtwo(Number(numtwo + num));
  const getAnswer = (numOne, numTwo, method) => {
    if (method === "+") setAnswer(numOne + numTwo);
    if (method === "-") setAnswer(numOne - numTwo);
    if (method === "*") setAnswer(numOne * numTwo);
    if (method === "/") setAnswer(numOne / numTwo);
  };
  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={() => updateNumone("1")}>1</button>
          <button onClick={() => updateNumone("2")}>2</button>
          <button onClick={() => updateNumone("3")}>3</button>
          <button onClick={() => updateNumone("4")}>3</button>
          <button onClick={() => updateNumone("5")}>4</button>
          <button onClick={() => updateNumone("6")}>4</button>
          <button onClick={() => updateNumone("7")}>5</button>
          <button onClick={() => updateNumone("8")}>6</button>
          <button onClick={() => updateNumone("9")}>7</button>
          <button>Clear</button>
        </div>
      </div>
      <div className="panel">
        <p>{method}</p>
        <div className="numbers">
          <button onClick={() => setMethod("+")}>+</button>
          <button onClick={() => setMethod("-")}>-</button>
          <button onClick={() => setMethod("*")}>*</button>
          <button onClick={() => setMethod("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numtwo}</p>
        <div className="numbers">
          <button onClick={() => updateNumtwo("1")}>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => getAnswer(numOne, numtwo, method)}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
