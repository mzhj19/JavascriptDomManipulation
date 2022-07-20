/* 
*************************************************
Author: Md. Zahid Hasan Jamil
https://github.com/mzhj19
https://www.linkedin.com/in/mzhj19

*************************************************
*/



// Add Button handler
const plusBtn = document.getElementById("plusBtn");
let count = 0;
let increment = 1;
plusBtn.addEventListener("click", () => {
  count += increment;
  document.getElementById("inputText").innerHTML = count;
});

// Minus Button Handler
const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", () => {
  if (count > 0) {
    let decrement = 1;
    count = count - decrement;
    document.getElementById("inputText").innerHTML = count;
  } else {
    alert("❌ You cannot decrease anymore");
  }
});
