const removeFromArray = function(arr, numRMV) {
    const filteredArray = arr.filter(element => element !== numRMV)

    console.log(filteredArray);
    console.log(numRMV);
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
