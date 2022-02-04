/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  let romansInput = s.split('');
  let arabInput = romansInput.map(item => romans[item]);
  let arabClean = [];
  
  for (let i=0; i<arabInput.length; i++) {
    if (arabInput[i] > arabInput[i+1] || arabInput[i] === arabInput[i+1]) {
      arabClean.push(arabInput[i])
    } else if (arabInput[i] < arabInput[i+1]) {
      arabClean.push(arabInput[i+1] - arabInput[i++])
    } else if (i === arabInput.length - 1) {
      arabClean.push(arabInput[i])
    }
  }

  return arabClean.reduce((sum, current) => sum + current);
    
};