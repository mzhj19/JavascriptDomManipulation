/* 
*************************************************
Author: Md. Zahid Hasan Jamil
https://github.com/mzhj19
https://www.linkedin.com/in/mzhj19

*************************************************
*/

const btnColorChange = document.querySelector('.change-color');

function generateRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

btnColorChange.addEventListener('click', () => {
  const r = generateRandomNumber(255);
  const g = generateRandomNumber(255);
  const b = generateRandomNumber(255);


  const rr = generateRandomNumber(255);
  const gg = generateRandomNumber(255);
  const bb = generateRandomNumber(255);

  btnColorChange.style.backgroundColor = `rgb(${rr}, ${gg}, ${bb})`;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
