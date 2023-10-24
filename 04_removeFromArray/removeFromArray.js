const removeFromArray = function(arr, ...numRMV) {
    const filteredArray = arr.filter(item => !numRMV.includes(item));

    console.log(filteredArray);
    console.log(numRMV);
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
