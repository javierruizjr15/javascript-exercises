const sumAll = function(num1, num2) {
    var finalSum = 0;
    console.log(finalSum);
       if (num1 < num2) {
        for (i=num1; i<=num2; i++) {
        finalSum += i;
       }
    } else if (num1 > num2) {
        for (i=num1; i>=num2; i--) {
            finalSum += i;
        }
    }
    console.log(finalSum);
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
