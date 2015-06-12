class Home {
    content:string;

    constructor(content:string) {
        this.content = content;
    }

    get() {
        return this.content;
    }
}


window.onload = function () {
    var home = new Home('this is a content');
    var content = home.get(); // or home.content (the same)

    document.getElementById('content').innerText = content;
};