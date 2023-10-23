const removeFromArray = function(arr, numRMV) {
    const newArray = [];
    for ( i=0; i<arr.length; i++) {
        if (arr[i]!==numRMV) {
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
    console.log(numRMV);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
