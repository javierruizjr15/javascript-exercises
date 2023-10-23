const reverseString = function(val) {
    var reversed = '';
    for ( i=val.length - 1; i>=0; i--) {
        reversed += val[i];
    }
    return reversed; 
};

// Do not edit below this line
module.exports = reverseString;
