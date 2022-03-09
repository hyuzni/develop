var name = "global var"

// let
function home(){
    var homevar = "homevar";
    for(let i=0; i<100; i++){
        console.log(i); 
        // let 선언된 블럭안에서만 사용할 수 있는 변수 
    }
    // console.log(i) // error
}
home();

// closure
document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded, not the same to load.
    var list = document.querySelectorAll("li");
    for(var i=0; i<list.length; i++){
        list[i].addEventListener("click", function(){
            console.log(i+"번째 리스트! var 선언 사용"); // 이때 closure 때문에 무조검 4번째 리스트로 출력이 됨. 왜지?      
        })
    }
    for(let i=0; i<list.length; i++){
        list[i].addEventListener("click", function(){
            console.log(i+"번째 리스트! let 선언 사용"); // let을 쓰면 위처럼 출력되는 현상을 방지할 수 있음.    
        })
    }
});
    
// const
function newHome(){
    const homeName = 'purgio'; // 변경이 불가한 상수 선언, 보통은 대문자로 표기. HOME_NAME
    // homeName = 'hillstate'; // error : Assignment to constant variable.
    // const 를 기본으로 사용하되, 변경이 필요한 변수는 let을 사용한다.
    // var 는 사용을 자제한다.
    console.log(homeName); 

    const arr = ['슈가','정국','지민'];
    arr.push('RM'); // 배열이나 객체의 값을 변경하는것은 가능하다. 절대 불변이 아닌 재할당이 안됨.
    console.log(arr);

    // immutable array. 뒤로가기나 임시저장 같은 때에 사용.
    const list = ["apple", "banana", "melon"];
    imList = [].concat(list, "orange"); // list와는 다른 임시저장성의 배열.
    console.log("list : ", list)
    console.log("imList : ", imList); 

}
newHome();

// es6 string new method
function stringMethod(){
    let str = 'hello world';
    let matchStr = 'hello';
    
    console.log(str.startsWith(matchStr)); // true. 시작되는 문자열이 매치가 되는지 확인
    console.log(str.endsWith(matchStr)); // false. 끝나는 문자열이 매치가 되는지 확인
}
stringMethod();