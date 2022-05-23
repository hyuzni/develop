import FormView from "../views/FormView.js";
import TabView from "../views/TabView.js";
import ResultView from "../views/ResultView.js";
import KeywordView from "../views/KeywordView.js";
import HistoryView from "../views/HistoryView.js";

import SearchModel from "../models/SearchModel.js";
import KeywordModel from "../models/KeywordModel.js";
import HistoryModel from "../models/HistoryModel.js";

const tag = "[MainController]";

export default {
    init() {
        FormView.setup(document.querySelector("form"))
            .on("@submit", e => this.onSubmit(e.detail.input)) // {input : this.inputEl.value}
            .on("@reset", () => this.onResetForm()); // event 수신기 부착
        
        TabView.setup(document.querySelector("#tabs"))
            .on("@change", e => this.onChangeTab(e.detail.tabName));
               // .on("@change", e => this.onChangeTab(e.detail.tabName)); // event chaning 이 안되는 이유?

        ResultView.setup(document.querySelector("#search-result"));
        
        KeywordView.setup(document.querySelector("#search-keyword"))
            .on("@click", e => this.onClickHistory(e.detail.keyword));

        HistoryView.setup(document.querySelector("#search-history"))
            .on("@click", e => this.onClickHistory(e.detail.keyword))
            .on("@remove", e => this.onRemoveHistory(e.detail.keyword));


        this.selectedTab = TabView.getActiveTab();
        console.log(this.selectedTab)
        this.renderView();
    },

    renderView () { // view 단 소스를 랜더링 하는 함수. 화면을 그리는 역할 함수
        console.log(tag, "renderview()");
        TabView.setActiveTab(this.selectedTab);

        if(this.selectedTab === "추천 검색어"){
            this.fetchSearchKeyword();
        }else { // 최근검색어
            this.fetchSearchHistory();
        }
        //ResultView.hide();
    },

    fetchSearchKeyword () {
        KeywordModel.list().then(data => {
            KeywordView.render(data);
        })
    },

    fetchSearchHistory () {
        HistoryModel.list().then(data => {
            console.log("fetchSearchHistory()", data)
            HistoryView.render(data);
            HistoryView.bindRemovebtn(); // history data를 호출 하고 나서 이벤트 바인드를 해줘야 함
        })
    },

    search (query) {
        console.log(query)
        FormView.setValue(query)
        SearchModel.list(query).then(data => {
            this.onSearchResult(data);
        });
        // search api
        this.onSearchResult([]);
    },

    onSubmit(input) {
        console.log(tag, "onSubmit()", input);
        this.search(input);
    },

    onResetForm() {
        console.log(tag, "onResetForm()");
        this.renderView();
    },

    onSearchResult(data) {
        TabView.hide();
        KeywordView.hide();
        ResultView.render(data);
    },

    onChangeTab(tabName) {
        //debugger
        TabView.setActiveTab(tabName);
    },
    onClickKeyword(keyword) {
        this.search(keyword)
    },
    onClickHistory(keyword) {
        this.search(keyword)
    },
    onRemoveHistory(keyword) {
        HistoryModel.remove(keyword)
        this.renderView(keyword)
    } 
};