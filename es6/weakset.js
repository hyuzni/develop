let mySet = new Set();
console.log(toString.call(mySet)); // object set

// set : 중복없이 유일한 값을 저장하려고 할 때, 이미 존재하는지 체크할 때 유용.
mySet.add("hyuzni");
mySet.add("alice");
mySet.add("hyuzni");

mySet.forEach(function(v){
    console.log(v) // hyuzni, alice
})
console.log(mySet.has("alice")); // true
console.log(mySet);

mySet.delete("hyuzni");
mySet.forEach(function(v){
    console.log(v); // alice
})

// weakset : 참조를 가지고 있는 객체만 저장이 가능함.
// 객체형태를 중복없이 저장하려고 할 때 유용하다.
// 객체가 null이 되거나 필요가 없어지면 가비지컬렉션 대상이 됨. weakset에서도 그 정보가 사라짐.
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 0];
let ws = new WeakSet();

ws.add(arr);
console.log(ws);
// ws.add(111); invalid value
// ws.add("111"); invalid value
// ws.add(null); invalid value
ws.add(function(){ console.log(this) });
ws.add(arr2);
console.log(ws, ws.has(arr), ws.has(arr2))
arr2 = null;
console.log(ws, ws.has(arr), ws.has(arr2)) // weakset안에서는 저장하는걸로 보이지만 정보는 사라짐.

