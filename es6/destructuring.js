let data = ["crong","hyuzni","ssungdi","alice","andy"];
// let jisu = data[2]
// let jung = data[3]
let [jisu,,jung] = data; // 0, 2번째의 배열값을 출력
console.log(jisu, jung);

// object 값 호출 방법
let obj = {
    name: "alice",
    address: "goyang",
    age: 33
}
let {name, age} = obj;
console.log(name, age);
let {name: myName, age: myAge} = obj;
console.log(myName, myAge);

var news = [
    {
        "title": "sbs",
        "newslist": [
            "sbs-list1",
            "sbs-list2",
            "sbs-list3"
        ]
    },
    {
        "title": "kbs",
        "newslist": [
            "kbs-list1",
            "kbs-list2",
            "kbs-list3",
            "kbs-list4",
        ]
    }
]
let [,kbs] = news;
let { title, list } = kbs;
console.log(kbs, title);
//let [, {newslist}] = news;
let {newslist} = kbs;
console.log(newslist);

function getNewsList([,{newslist}]){
    console.log(newslist)
}
document.querySelector("li").addEventListener("click", function(e){
    console.log(e.target);
    getNewsList(news);
})