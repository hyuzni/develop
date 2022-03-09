function getObj() {
    const name = "crong";

    const getName = function(){
        return name;
    }

    const setName = function(newname){
        name = newname;
    }

    const printName = function() {
        console.log(name);
    }

    // return {
    //     getName : getName,
    //     setName : setName
    // } key, value name이 같을 때 아래와 같이 표현할 수 있음
    return { getName, setName, name };
}
var obj = getObj();
console.log(obj, obj.getName(), obj.name ); 

// 이런식의 표현도 가능. function과 return을 생략한 object정의
const data = {
    name2 : 'hyuzni',
    getName() { return name2; },
    age : 33
}

console.log(data.name2)