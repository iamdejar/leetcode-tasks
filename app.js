import { twoSum } from './scripts/two-sum.js';
import { isPalindrome } from './scripts/palindrome.js';
import { romanToInt } from './scripts/roman-to-integer.js';
import { intToRoman } from './scripts/integer-to-roman.js';


// spoiler

document.querySelectorAll('.spoiler__button').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.closest('.spoiler').classList.toggle('spoiler--active')
  })
})


// two sum section

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


// palindrome section

const palindromeInput = document.querySelector('[data-palindrome-input]');
const palindromeBtn = document.querySelector('[data-palindrome-btn]');

palindromeBtn.addEventListener('click', () => {

  document.querySelector('[data-palindrome-result]').innerHTML = String(isPalindrome(Number(palindromeInput.value)))

});


// integer to roman section

const integerInput = document.querySelector('[data-integer-input]');
const integerBtn = document.querySelector('[data-integer-btn]');

integerBtn.addEventListener('click', () => {
  
  document.querySelector('[data-integer-result]').innerHTML = intToRoman(integerInput.value);

});


// roman to integer section

const romansInput = document.querySelector('[data-romans-input]');
const romansBtn = document.querySelector('[data-romans-btn]');

romansBtn.addEventListener('click', () => {

  document.querySelector('[data-romans-result]').innerHTML = romanToInt(romansInput.value);

});