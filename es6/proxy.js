const myObj = { name:'hyuzni'};
// const proxy = new Proxy(myObj, {});
const proxy = new Proxy(myObj, {
    get: function () {

    },
    set : function () {
        console.log("change value");
    }
});

console.log(proxy.name); // hyuzni
proxy.name = 'hyunjin';
console.log(proxy.name); // hyunjin
console.log(myObj.name); // hyunjin
console.log(toString.call(proxy)); // Object 

/* console

> proxy 
> [name: 'hyunjin']
> myObj
> [name: 'hyunjin']
> proxy == myObj
> false
> proxy.name == myObj.name
> true

스크립트 디버거 소스 로드 안될 때
chrome://flags/#enable-quic
들어가서 Experimental QUIC protocol > Disabled 로 변경

*/