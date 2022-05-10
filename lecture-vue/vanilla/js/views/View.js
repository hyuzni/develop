const tag = "[View]";

export default {
    init(el) {
        if (!el) throw el; // Uncaught undefined
        this.el = el; 
        return this;
    },

    on(event, handler) {
        this.el.addEventListener(event, handler);
        return this;
    },

    emit(event, data) {
        const evt = new CustomEvent(event, { detail: data }); // custom Event  생성
        this.el.dispatchEvent(evt); // 이벤트 발송
        return this; 
    },

    hide() {
        this.el.style.display = "none";
        return this;
    },

    show() {
        this.el.style.display = "";
        return this;
    }

};