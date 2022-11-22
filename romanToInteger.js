const romanToInteger = (s) => {
  let intiger = null;
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    const value2 = s[i + 1];
    if (value == "I" && value2 !== "V" && value2 !== "X") {
      intiger += 1;
    } else if (value == "V") {
      intiger += 5;
    } else if (value == "D") {
      intiger += 500;
    } else if (value == "M") {
      intiger += 1000;
    } else if (value == "L") {
      intiger += 50;
    } else if (value == "X" && value2 !== "L" && value2 !== "C") {
      intiger += 10;
      console.log("log something");
    } else if (value == "C" && value2 !== "D" && value2 !== "M") {
      intiger += 100;
    } else if (value == "I" && value2 == "V") {
      intiger += 4;
      i += 1;
    } else if (value == "I" && value2 == "X") {
      intiger += 9;
      i += 1;
    } else if (value == "X" && value2 == "L") {
      intiger += 40;
      i += 1;
    } else if (value == "X" && value2 == "C") {
      intiger += 90;
      i += 1;
    } else if (value == "C" && value2 == "D") {
      intiger += 400;
      i += 1;
    } else if (value == "C" && value2 == "M") {
      intiger += 900;
      i += 1;
    }
  }
  return intiger;
};
const showResult = () => {
  let number = document.getElementById("roman").value;
  let result = document.getElementById("result");
  result.innerHTML = `<h5 class="text-center p-2"style="background: rgba(255, 0, 0, 0.11)"
                    >${romanToInteger(number)}</h5>`;
};
