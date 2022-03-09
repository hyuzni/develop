/* 
로또번호 생성기
1. 유일한 값을 추출하는 과정에서 Set을 사용합니다.
2. getRandomNumber함수에 변수를 전달하는 과정에서 destructuring을 사용해봅니다. 
*/

const SETTING = {
    name : "LUCKY LOTTO",
    count: 6,
    maxNumber: 45
}

function getRandomNumber(count, maxNumber) {
    // 랜덤한 유일한 숫자값을 추출
    let setNum = new Set();
    let idx = 0;
    while(idx < count){
        let num = Math.floor(Math.random() * Math.floor(maxNumber) + 1); 
        if(!setNum.has(num)){
            setNum.add(num);
            idx++;
        }
    }
    return setNum;
}

let {name, count, maxNumber} = SETTING;
document.querySelector("ul").addEventListener("click", function(){
    let numArr = getRandomNumber(count, maxNumber);
    console.log(numArr) 
})