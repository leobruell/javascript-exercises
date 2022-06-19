const repeatString = function(str, num) {
    if (num == 0){return ''}
    if (num < 0){return 'ERROR'}
    let strOut = str;
    for (let i = 1; i < num; i++){
        strOut += str; 
    }
    return strOut
};

// Do not edit below this line
module.exports = repeatString;
