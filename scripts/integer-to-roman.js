export function intToRoman(num) {
  let inpMass = String(num).split("");

  switch (inpMass.length) {
    case 1:
      return convert("I", "V", "X", 0);

    case 2:
      return convert("X", "L", "C", 0) + convert("I", "V", "X", 1);
      
    case 3:
      return (
        convert("C", "D", "M", 0) +
        convert("X", "L", "C", 1) +
        convert("I", "V", "X", 2)
      );

    case 4:
      let number = [];
      for (let x = 0; x < Number(inpMass[0]); x++) {
        number.push("M");
      }
      return (
        number.join("") +
        convert("C", "D", "M", 1) +
        convert("X", "L", "C", 2) +
        convert("I", "V", "X", 3)
      );
  }

  function convert(firstNum, middleNum, lastNum, indx) {
    if (inpMass[indx] - 5 === 0) {
      return middleNum;
    } else if (inpMass[indx] - 5 > 0) {
      if (inpMass[indx] - 5 === 4) return firstNum + lastNum;

      let result = [middleNum];

      for (let i = 0; i < inpMass[indx] - 5; i++) {
        result.push(firstNum);
      }

      return result.join("");
    } else if (inpMass[indx] - 5 < 0) {
      if ((inpMass[indx] - 5) * -1 === 1) return firstNum + middleNum;

      let result = [];

      for (let i = 0; i < Number(inpMass[indx]); i++) {
        result.push(firstNum);
      }

      return result.join("");
    }
  }
};