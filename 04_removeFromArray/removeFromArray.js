const removeFromArray = function(arr, val) {
        let args = [...arguments];
        args = args.slice(1)
        for (let i = 0; i < args.length; i++){
            arr = arr.filter((x) => (x !== args[i]))
        }
        return arr
}
console.log(removeFromArray([1,2,3,4,5], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
