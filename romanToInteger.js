/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roman = null;
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    const value2 = s[i + 1];
    if (value == "I" && value2 !== "V" && value2 !== "X") {
      roman += 1;
    } else if (value == "V") {
      roman += 5;
    } else if (value == "D") {
      roman += 500;
    } else if (value == "M") {
      roman += 1000;
    } else if (value == "L") {
      roman += 50;
    } else if (value == "X" && value2 !== "L" && value2 !== "C") {
      roman += 10;
      console.log("log something");
    } else if (value == "C" && value2 !== "D" && value2 !== "M") {
      roman += 100;
    } else if (value == "I" && value2 == "V") {
      roman += 4;
      i += 1;
    } else if (value == "I" && value2 == "X") {
      roman += 9;
      i += 1;
    } else if (value == "X" && value2 == "L") {
      roman += 40;
      i += 1;
    } else if (value == "X" && value2 == "C") {
      roman += 90;
      i += 1;
    } else if (value == "C" && value2 == "D") {
      roman += 400;
      i += 1;
    } else if (value == "C" && value2 == "M") {
      roman += 900;
      i += 1;
    }
  }
  return roman;
};
