export default {
    data: [
        { keyword: "that that" },
        { keyword: "I like that" },
        { keyword: "Can you feel me" },
    ],

    list() {
        return new Promise(res => {
            setTimeout(() => {
                res(this.data)
            }, 200)
        })
    }
}