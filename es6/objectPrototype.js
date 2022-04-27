// prototype 만 추가하는 부분이라 명확하고 단순함
const healthObj = { // parent
    showHealth : function() {
        console.log("오늘 운동시간 : "+ this.healthTime);
    },
    setHealth : function(newTime) {
        this.healthTime = newTime;
    }
}

// const myHealth = {
//     name : "crong",
//     healthTime: "14:00"
// }
// console.log("myhealth is " + myHealth);

const newObj = Object.setPrototypeOf({
    name : "crong",
    healthTime: "14:00" // myHealth
}, healthObj);

console.log(newObj);
console.log("myhealth is " + newObj.healthTime);
newObj.setHealth("11:00");
newObj.showHealth();
console.log(newObj.healthTime); // 11:00

// prototype chaining
const childHealthObj = {
    getAge : function() {
        return this.age;
    }
}

Object.setPrototypeOf(childHealthObj, healthObj);

const childObj = Object.setPrototypeOf({
    age : 32
}, childHealthObj);

console.log(childObj);
childObj.setHealth("12:50");
childObj.showHealth();