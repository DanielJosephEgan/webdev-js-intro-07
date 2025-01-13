"use strict";

const submissionBtn = document.getElementById("submission-btn");

const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");




function returnTheRemainder() {
  let a = 5;
  let b = 4;
  const remainder =  a % b;
  remainderElement.innerHTML = remainder;

}

 
function checkIfEven() {
  const num = 47;

  if (num % 2 === 0) {
  document.getElementById("check-if-even").innerHTML = `${"True"}`;
  } else {
  document.getElementById("check-if-even").innerHTML = `${"False"}`;
  }
}

function getTheFourthElement(){
  const lostNumbers = [4, 8, 15, 16, 23, 42];
  let number = lostNumbers[3];
  document.getElementById('lost-numbers').innerHTML = `${number}`;
}


function render() {
  returnTheRemainder ()
  checkIfEven()
  getTheFourthElement()
}

submissionBtn.addEventListener("click", function () {
  render();
});


