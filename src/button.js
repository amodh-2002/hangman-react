import { useState } from "react";
//what states gives : 1)It gives a variable that we can use inside our function which is going to essentially
//be the value sp that we can check the value 2) It gives us a function that we can use to change the value

export default function Button({ value, onClick }) {
  const [isClicked, setIsClicked] = useState(false);
  let className = "letter-button";
  if (isClicked) {
    className += " guessed";
  }
  function clickHandler() {
    setIsClicked(true);
    onClick(value);
  }
  //right now isClicked has a default value of isClicked
  //to change it we do the following
  // setIsClicked(true);
  //whenever we call this setfunction it is going to notify react that state has changed for this component
  //and it is going to call this entire function so that it can give correct o/p and put that into document
  // console.log("button");
  return (
    <button className={className} onClick={clickHandler}>
      {value}
    </button>
  );
}
