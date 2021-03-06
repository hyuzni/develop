import View from "./View.js";

const tag = "[Result View]";

const ResultView = Object.create(View);

ResultView.setup = function (el) {
    this.init(el);
};

ResultView.render = function(data = []) {
    console.log(tag, "render()", data);
    this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : "검색결과가 없습니다.";
};

ResultView.getSearchResultHtml = function(data) {
    // debugger;
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item);
        return html;
    }, "<ul>") + "</ul>";
};

ResultView.getSearchItemHtml = function (item) {
    return `<li id="item-${item.id}">
        <p>${item.name}</p>
    </li>`;
};

export default ResultView; 