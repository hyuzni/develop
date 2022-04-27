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

// rest parameters
function checkNum(){ 
    const argArray = Array.prototype.slice.call(arguments); // arguments의 개체들을 슬라이스 해서 array prototype에 담는다

    console.log(toString.call(argArray)); // object Array
    console.log(toString.call(arguments)) // object arguments
    console.log(argArray); // [10,2,3,4,5,"55"] 
    
    const result = argArray.every((v) => typeof v === "number"); // every : 모든 값이 true 인지 체크.
    console.log(result); // false ("55"는 number type 이 아님.)
}

// rest parameters es6
function checkNum2(...argArray){ // Array.prototype.slice.call(arguments) 와 같은 값. 진짜 배열

    console.log(toString.call(argArray)); // object Array
    console.log(argArray); // [10,2,3,4,5] 
    
    const result = argArray.every((v) => typeof v === "number");
    console.log(result);
}
const result = checkNum(10,2,3,4,5,"55");
const result2 = checkNum2(10,2,3,4,5);
