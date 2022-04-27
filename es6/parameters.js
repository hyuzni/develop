// default parameters

function sum(value, size=1){
    return value * size;
}
console.log(sum(4,2)); // 8
console.log(sum(4)); // 4

function sum1(value, size={value:1}){
    return value * size.value;
}
console.log(sum1(3,{value:5})); // 15
console.log(sum1(3)); // 3