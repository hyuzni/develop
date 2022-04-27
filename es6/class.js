
function Health(name){
    this.name = name;
}

Health.prototype.showHealth = function(){
    console.log(this.name + "님 안녕하세요.");
}

const h = new Health("crong");
h.showHealth();

// es6 class
class Health2 {
    constructor(name, lastTime) {
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth(){
        console.log("안녕하세요 " + this.name)
    }
}

const myHealth = new Health2("hyuzni");
myHealth.showHealth();

console.log(toString.call(Health)) // function
console.log(toString.call(Health2)) // function