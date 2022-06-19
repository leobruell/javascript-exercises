const sumAll = function(num1, num2) {
    let sumTotal = 0;
    if (typeof(num1) == 'string'|| typeof(num2) == 'string'){return 'ERROR'}
    else if (num1 < 0 || num2 < 0){return 'ERROR'}
    else if (num1 < num2){
        for (let i = num1; i <= num2; i++){
            sumTotal += i;
        }
        return sumTotal
    }
    else if (num1 > num2){
        for (let i = num1; i >= num2; i--){
            sumTotal += i;
        }
        return sumTotal 
    }
    else {return 'ERROR'}
};

// Do not edit below this line
module.exports = sumAll;
