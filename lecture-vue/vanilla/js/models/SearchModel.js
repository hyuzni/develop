const data = [
    {
        id: 1,
        name: "가나다라마바사"
    },
    {
        id: 2,
        name: "아자차카타파하"
    }
]

export default {
    list(query) {
        return new Promise(res => {
            setTimeout(() => {
                res(data)
            }, 200)
        })
    }
}
