/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  let mass = String(x).split('');
  let massReverse = mass.reverse();
  let xReverse = massReverse.join('');

  return x === Number(xReverse);
};