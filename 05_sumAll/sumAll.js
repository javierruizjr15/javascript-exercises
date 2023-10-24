const sumAll = function (num1, num2) {
  var finalSum = 0;
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"

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
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
