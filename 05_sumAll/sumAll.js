const sumAll = function (num1, num2) {
  var finalSum = 0;

  console.log(finalSum);
  if (num1 < num2) {
    for (i = num1; i <= num2; i++) {
      finalSum += i;
    }
  } else if (num1 > num2) {
    for (i = num1; i >= num2; i--) {
      finalSum += i;
    }
  }
  console.log(finalSum);
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR"
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
