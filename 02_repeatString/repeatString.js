const repeatString = function(val, num) {
    const result = [];
    for ( i =0; i<num; i++) {
        result.push(val);
    }
    const resultString = result.join('');
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
