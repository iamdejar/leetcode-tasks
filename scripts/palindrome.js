export function isPalindrome(x) {
  let mass = String(x).split('');
  let massReverse = mass.reverse();
  let xReverse = massReverse.join('');

  return x === Number(xReverse);
};