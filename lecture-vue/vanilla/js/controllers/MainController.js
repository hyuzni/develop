import FormView from "../views/FormView.js";
import ResultView from "../views/ResultView.js"

import SearchModel from "../models/SearchModel.js"

const tag = "[MainController]";

export default {
    init() {
        console.log(tag, "init()");
        FormView.setup(document.querySelector("form"))
                .on("@submit", e => this.onSubmit(e.detail.input)) // {input : this.inputEl.value}
                .on("@reset", () => this.onResetForm()); // event 수신기 부착
        
        ResultView.setup(document.querySelector("#search-result"));
    },

    search (query) {
        console.log(tag, "search()", query)
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
        // search api
        this.onSearchResult([])
    },

    onSubmit(input) {
        console.log(tag, "onSubmit()", input);
        this.search(input)
    },

    onResetForm() {
        console.log(tag, "onResetForm()");
    },

    onSearchResult(data) {
        ResultView.render(data)
    }
};