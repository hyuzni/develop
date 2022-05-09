export default {
    data: [
        { keyword: "search memory 1", date: "2022.05.09" },
        { keyword: "search memory 2", date: "2022.05.10" },
        { keyword: "search memory 3", date: "2022.05.11" },
    ],

    list() {
        return Promise.resolve(this.data)
    },

    add(keyword = ""){
        keyword = keyword.trim()
        if(!keyword) return
        if(this.data.some(item => item.keyword === keyword)) {
            this.remove(keyword)
        }

        const date = "2022.05.01"
        this.data = [{keyword, date}, ...this.data]

    },

    remove(keyword) {
        this.data = this.data.filter(item => item.keyword !== keyword)
    }

} 