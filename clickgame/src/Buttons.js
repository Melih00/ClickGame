import React, { useState, useEffect } from "react";
import "./Button.css";

export function Button(el) {
  // document.getElementsByClassName('button')[0].classList.add('el.el')
  const [counter, setCounter] = useState(10);
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(false);
  const [value2, setValue2] = useState(true);
  const [congrats, setCongrats] = useState(false);
  const [sad, setSad] = useState(false);
  const increase = () => {
    if (value2) {
      setCounter(counter + 5);
    }
    if (!value) {
      setValue(true);
      setCounter(counter - 0);
      setCounter2(counter2 - 1);
    }
  };
  useEffect(() => {
    if (counter === 0 && counter2 < 0) {
      setValue2(false);
      setCounter(0);
      setCounter2(0);
      setTimeout(
        ()=>{

          setSad(true);
        },1700
      )
    } else if (counter > 99) {
      setValue2(false);
      setCounter(100);
      setCounter2(0);
      setTimeout(
        ()=>{
          
          setCongrats(true)
        },1700
      )
    } else if (value && value2) {
      if (counter2 < 0) {
        setCounter(counter - 1);
        setCounter2(9);
      } else {
        if (el.el === "kolay") {
          setTimeout(() => {
            setCounter2(counter2 - 1);
          }, 6);
        } else if (el.el === "normal") {
          setTimeout(() => {
            setCounter2(counter2 - 1);
          }, 4);
        } else if (el.el === "zor") {
          setTimeout(() => {
            setCounter2(counter2 - 1);
          }, 1);
        }
      }
    }
  }, [counter2]);
  var classes = `button ${el.el}`;
  const congratsInner = (

    <div>
      <button onClick={()=>window.location.reload()} className={classes}>
        Tebrikler! Oyunu Kazandınız. Yeniden Denemek İçin Tıklayın!
      </button>
    </div>
  )
  const sadInner = (
    
    <div>
      <button onClick={()=>window.location.reload()} className={classes}>
        Oyunu Kaybettiniz. Yeniden Denemek İçin Tıklayın!
      </button>
    </div>
  )
  return congrats ? congratsInner : sad ? sadInner : (
    <div>
      <button className={classes} onClick={increase}>
        {counter}
        {counter2}
      </button>
    </div>
  );
}
