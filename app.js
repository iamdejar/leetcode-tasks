import { twoSum } from './scripts/two-sum.js';
import { isPalindrome } from './scripts/palindrome.js';
import { romanToInt } from './scripts/roman-to-integer.js';


const sumArrayInput = document.querySelector('[data-sum-array]');
const sumTargetInput = document.querySelector('[data-sum-target]');
const sumButton = document.querySelector('[data-sum-btn]');

let sumArray = [];
let sumTarget;

sumButton.addEventListener('click', () => {
  
  let sumArrayStr = sumArrayInput.value.split(',');
  sumArray = sumArrayStr.map(item => Number(item));
  sumTarget = Number(sumTargetInput.value);

  document.querySelector('[data-sum-result]').innerHTML = String(twoSum(sumArray, sumTarget));
})


const palindromeInput = document.querySelector('[data-palindrome-input]');
const palindromeBtn = document.querySelector('[data-palindrome-btn]');

palindromeBtn.addEventListener('click', () => {

  document.querySelector('[data-palindrome-result]').innerHTML = String(isPalindrome(Number(palindromeInput.value)))

});


const romansInput = document.querySelector('[data-romans-input]');
const romansBtn = document.querySelector('[data-romans-btn]');

romansBtn.addEventListener('click', () => {

  document.querySelector('[data-romans-result]').innerHTML = romanToInt(romansInput.value);

});