import { twoSum } from './scripts/two-sum.js';
// import './scripts/palindrome';
// import './scripts/roman-to-integer';

const sumArrayInput = document.querySelector('[data-sum-array]');
const sumTargetInput = document.querySelector('[data-sum-target]');
const sumButton = document.querySelector('[data-sum-btn]');

let sumArray = [];
let sumTarget;

sumButton.addEventListener('click', () => {
  
  let sumArrayStr = sumArrayInput.value.split(',');
  sumArray = sumArrayStr.map(item => Number(item));
  sumTarget = Number(sumTargetInput.value);

  document.querySelector('.two-sum__answer').innerHTML = String(twoSum(sumArray, sumTarget));
})

