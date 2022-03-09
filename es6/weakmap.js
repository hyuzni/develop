// array > set, weakset
// object > map, weakmap

let wm = new WeakMap();
let myFun = function(){}; // 함수가 얼마나 실행되었는지을 알려고 할 때,

wm.set(myFun, 0);
console.log(wm);

for(let i=0; i<10; i++){
    count = wm.get(myFun); // get value
    count++;
    wm.set(myFun, count);
}
console.log(wm.get(myFun))

myFun = null;
console.log(wm.get(myFun), wm.has(myFun));

// weakmap 활용
function Area(h, w){
    this.height = h;
    // this.width = w;
    wm.set(this, {h, w}); // weakmap을 활용해서 private한 변수 선언
}
Area.prototype.getArea = function(){
    const { h, w } = wm.get(this); // destructuring
    return h * w;
}
let myarea = new Area(10, 20);
console.log(myarea.getArea());
console.log(myarea.height); // 10
console.log(myarea.h) // undefined

