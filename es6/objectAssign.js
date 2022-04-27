const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : "+this.healthTime);
    }
}
const myHealth = Object.create(healthObj);

myHealth.name = "hyuzni";
myHealth.healthTime = "11:20";

console.log(myHealth);
console.log(myHealth.showHealth());

// assign object
const myHealth2 = Object.assign( Object.create(healthObj), {
    name : "alice",
    healthTime : "12:50"
})

console.log(myHealth2)
console.log(myHealth2.showHealth())

// immutable 객체 만들기
const previousObj = { // 이전 데이터
    name : "hyunjin",
    healthTime : "13:00"
}

const myHealth3 = Object.assign( Object.create(healthObj), previousObj, {
    name : "hyunjin jang"
})
/* 
Object.assign : 

@param target — The target object to copy to. 타겟이 되는 객체를 복사
@param source1 — The first source object from which to copy properties. prev object value
@param source2 — The second source object from which to copy properties. current object value
 */
console.log(myHealth3); // 새로 선언된 객체의 값이 있으면 그 값만 변경하고 나머지는 이전 값을 유지
console.log(myHealth3.showHealth())