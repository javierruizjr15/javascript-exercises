const repeatString = function(val, num) {
    console.log(num);
    if ( num < 0 ) {
        return "ERROR"
    }

    const result = [];
    for ( i =0; i<num; i++) {
        result.push(val);
    }
    const resultString = result.join('');
        return resultString;
};

// Do not edit below this line
module.exports = repeatString;
