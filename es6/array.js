function forArray(){
    var data = [1,2, undefined, NaN, null, ""];
    
    // 다 같은 for문 이지만 쓰는 방식이 다름
    for(var i=0; i<data.length; i++){
        console.log("for : ", data[i]);
    }
    data.forEach(function(value){
        console.log("forEach : ", value);
    })
    for(let idx in data){
        // for in 은 array 보단 object에 적합함. 
        // prototype이 추가되었을 때 array의 값이 아닌 내용이 출력될 수 있음
        console.log("for in : ", data[idx]);
    }
    for(let value of data){
        // 배열 순회에는 for in 보단 for of를 추천함
        console.log("for of: ", value);
    }
    const str = "hello world!!";
    for(let value of str){
        // for of 는 문자열 순회에서도 유용하게 쓸 수 있음
        console.log("for of str : ", value);
    }

    //spread operator, 펼침 연산자.
    let pre = ['apple', 'banana', 100];
    let newData = [...pre]; // 결과값은 pre와 같으나, 다른 데이터.
    // ...은 배열의 값을 펼쳐서 출력시킴. 기존 데이터의 복사,저장에 유용하게 쓰임.

    let pre2 = [100, 200, "hello", null];
    let newData2 = [0, 1, 2, 3, ...pre2, 4];

    console.log(newData2);

    let num = [1,2,3]
    console.log(sum(num[0],num[1],num[2])); // 예전에 쓰던 비효율적인 방식
    console.log(sum.apply(null, num)); // apply 라는 메서드를 잘 모름. 이것도 옛날 방식. 
    console.log(sum(...num)) // ... spread operator 사용.

}
function sum(a,b,c){
    return a+b+c;
}
// forArray();

// from method
function addMark(){
    // 인자값을 받지 않아도 함수의 arguments를 이용해서 값을 사용할 수 있음. 가변적인 파라메타를 받아야할 때 유용하게 쓰임
    // let newData = [];
    // for(let i=0; i<arguments.length; i++){
    //     newData.push(arguments[i]+"!");
    // }
    let newArray = Array.from(arguments); // arguments로 배열을 만들다.
    let newData = newArray.map(function(value){
        return value + "!";
    });
    console.log(newData);
}
addMark(1,2,3,4,5);