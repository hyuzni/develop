
/*  json으로 응답을 받고, javascript object로 변환 후에
    어떠한 데이터 처리 조작을 하고 dom에 추가
    데이터 + html 문자열의 결합이 필요 */

const data = [
    {
        name: 'coffee-bean',
        order: true,
        items: ['americano','milk','green-tea']
    },
    {
        name: 'starbucks',
        order: false
    },
]

// tagged template literals
function fn(tags, name, items){
    if(typeof items === "undefined"){
        items = "<span>주문가능한 상품이 없습니다.</span>";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

// const template = fn`<div>welcome ${data[0].name} !!</div>
//                     <h2>주문가능항목</h2> <div>${data[1].items}</div>`;

// 아래와 같이 함축형으로 표현 가능
data.forEach((v) => {
    let template = fn`<div>welcome ${v.name} !!</div>
                      <h2>주문가능항목</h2> <div>${v.items}</div>`;
    
    console.log(template);
    document.querySelector("#message").innerHTML += template;
})
