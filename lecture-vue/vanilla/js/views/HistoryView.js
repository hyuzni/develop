import View from "../views/View.js"

const tag = "[History View]"; // for debugging

const HistoryView = Object.create(View)

HistoryView.setup = function (el) {
    this.init(el)
    return this;
}

HistoryView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getHistorysHtml(data) : "검색 기록이 없습니다.";
    this.bindRemovebtn();
    this.show();
}

HistoryView.getHistorysHtml = function (data) {
    return data.reduce((html, item, index) => {
        html += `<li data-keyword="${item.keyword}">
                    <span class="number">${index+1}</span>
                    ${item.keyword}
                    <span class="date">${item.date}</span>
                    <button class="btn-delete">삭제</button>
                 </li>`
        return html;
    }, '<ul class="list">') + '</ul>'
}

HistoryView.bindClickEvent = function() {
    Array.from(this.el.querySelectorAll("li")).forEach(li => {
        li.addEventListener("click", e => this.onClickKeyword(e));
    })
}

HistoryView.bindRemovebtn = function() {
    Array.from(this.el.querySelectorAll("button.btn-delete")).forEach(btn => {
        btn.addEventListener("click", e => {
            e.stopPropagation();
            this.onRemove(btn.parentElement.dataset.keyword);
        })
    })
}

HistoryView.onRemove = function (keyword) {
    this.emit("@remove", {keyword})
}

HistoryView.onClickKeyword = function(e) {
    const {keyword} = e.currentTarget.dataset;
    this.emit("@click", {keyword})
}

export default HistoryView;