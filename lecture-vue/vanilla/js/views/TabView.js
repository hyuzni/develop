import View from "./View.js";

const tag = "[Tab View]";

const TabView = Object.create(View);

TabView.setup = function (el) {
    this.init(el);
    this.bindClick();

    return this;
};

TabView.getActiveTab = function () {
    console.log("this.selectedTab",this.el.querySelectorAll("li.active"))
    return Array.from(this.el.querySelectorAll("li.active")).innerHTML;
};

TabView.setActiveTab = function (tabName) {
    console.log(tag, tabName)
    Array.from(this.el.querySelectorAll("li")).forEach(li => {
        li.className = li.innerHTML === tabName ? "active" : "";
    });
};

TabView.bindClick = function () {
    Array.from(this.el.querySelectorAll("li")).forEach(li => {
        li.addEventListener("click", () => this.onClick(li.innerHTML));
    });
};

TabView.onClick = function (tabName) {
    this.setActiveTab(tabName);
    this.emit("@change", {tabName}); // 왜 커스텀 이벤트를 만드는지 모르겠음!
};

export default TabView;