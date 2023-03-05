import React, { useState } from "react";
import "./Calculator.css";

function Calculator(props) {
  const [number, setNumber] = useState("");
  const [finalResult, setFinalResult] = useState("");

  const getNum = (num, classname) => {
    console.log(num, classname);
    setNumber(number + num);
    console.log(number);
    const myButton = document.getElementsByClassName(classname)[0];
    myButton.classList.add("clicked");
    setTimeout(function () {
      myButton.classList.remove("clicked");
    }, 100);
  };

  const clear = () => {
    setNumber("");
    setFinalResult("");
  };

  function equalTo(state) {
    try {
      const func = new Function(`return ${state}`);
      const result = func();
      setFinalResult(result);
      setNumber("");
    } catch (e) {
      setFinalResult("Invalid Expression");
      setNumber("");
    }
  }

  return (
    <div className="cal">
      <div className="main">
        <div className="display-box">
          {finalResult ? <h1>{finalResult}</h1> : <h3>{number}</h3>}
        </div>
        <div onClick={() => getNum("1", "btn-1")} className="btn btn-1">
          1
        </div>
        <div onClick={() => getNum("2", "btn-2")} className="btn btn-2">
          2
        </div>
        <div onClick={() => getNum("3", "btn-3")} className="btn btn-3">
          3
        </div>
        <div onClick={() => getNum("+", "btn-4")} className="btn btn-4">
          +
        </div>
        <div onClick={() => getNum("4", "btn-5")} className="btn btn-5">
          4
        </div>
        <div onClick={() => getNum("5", "btn-6")} className="btn btn-6">
          5
        </div>
        <div onClick={() => getNum("6", "btn-7")} className="btn btn-7">
          6
        </div>
        <div onClick={() => getNum("-", "btn-8")} className="btn btn-8">
          -
        </div>
        <div onClick={() => getNum("7", "btn-9")} className="btn btn-9">
          7
        </div>
        <div onClick={() => getNum("8", "btn-10")} className="btn btn-10">
          8
        </div>
        <div onClick={() => getNum("9", "btn-11")} className="btn btn-11">
          9
        </div>
        <div onClick={() => getNum("*", "btn-12")} className="btn btn-12">
          x
        </div>
        <div onClick={() => getNum(".", "btn-13")} className="btn btn-13">
          .
        </div>
        <div onClick={() => getNum("0", "btn-14")} className="btn btn-14">
          0
        </div>
        <div onClick={() => equalTo(number)} className="btn btn-equal">
          =
        </div>
        <div onClick={() => getNum("/", "btn-16")} className="btn btn-16">
          /
        </div>
        <div onClick={() => getNum("(", "btn-17")} className="btn btn-17">
          (
        </div>
        <div onClick={() => getNum(")", "btn-18")} className="btn btn-18">
          )
        </div>
        <div onClick={() => clear()} className="btn btn-clear">
          clear
        </div>
      </div>
    </div>
  );
}

export default Calculator;
