
/* 
filter, includes, from 을 사용해서 문자열 'e'가 포함된 노드로 구성된 배열을 만들어서 반환하기 
*/ 

// 현진 풀이, node로 구성된 배열을 return해야하는데 그냥 배열로 해버림...문제이해를 잘못함 ㅠ
function matchedFruit(){
    const fruitList = document.querySelectorAll("li"),
          fruitArr = [];

    for(let i=0; i < fruitList.length; i++){
        let fruit = fruitList[i].innerText;
        if(fruit.includes('e')){
            fruitArr.push(fruitList[i].innerText);
        }
    }
    return fruitArr;
}

// 강사 풀이
function matchedFruit2(){
    let list = document.querySelectorAll("li");
    let listArray = Array.from(list); // li node 로 구성된 배열
    let eArray = listArray.filter(function(v){ // filter 함수는 node array에서만 사용?
        // v : 배열 하나하나를 구성하고 있는 노드
        return v.innerText.includes("e");
    });
    return eArray;
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("현진 답안 : ", matchedFruit());
    console.log("강사 답안 : ", matchedFruit2());
})