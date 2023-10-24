const sumAll = function (num1, num2) {
  var finalSum = 0;
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"
  if (num1 > num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }

  console.log(finalSum);
    for (i = num1; i <= num2; i++) {
      finalSum += i;
    }
  console.log(finalSum);
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
