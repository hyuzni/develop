// arrow function
setTimeout(function(){
    console.log("setting time out!");   
}, 1000);

setTimeout( () => {
    console.log("used arrow function!")
}, 2000);

let newArr = [1,2,3,4,5].map(function(val, idx, obj){
    return val * 2;
})
let newArr2 = [1,2,3,4,5].map((v) => {
    return v * 2;
})
let newArr3 = [1,2,3,4,5].map((v) => ("v*2="+v*2) );

console.log(newArr);
console.log(newArr2);
console.log(newArr3);

// this context of Arrow function
const myObj = {
    runTimeout() {
        setTimeout(function(){
            console.log( this === window ); // true
            this.printData(); // error
        }, 200)
        // arrow function 일때 this context의 bind가 필요 없음
        setTimeout(() => {
            console.log( this === window ); // false
            this.printData(); // is working
        }, 200)
    },
    printData() {
        console.log("hi, codesquad!");
    }
}
myObj.runTimeout();

const el = document.querySelector("p");

const clickObj = {
    register() {
        el.addEventListener("click", function(e){
            this.printData(e.target); // error
        });
        el.addEventListener("click", function(e){
            this.printData(e.target); // is working
        }.bind(this));
        el.addEventListener("click", (e) => {
            this.printData(e.target); // is working
        }) 
    },
    printData(el) {
        console.log("clicked!!!!" + el.innerText);
    }
}
clickObj.register();