var Home = (function () {
    function Home(content) {
        this.content = content;
    }
    Home.prototype.get = function () {
        return this.content;
    };
    return Home;
})();
window.onload = function () {
    var home = new Home('this is a content');
    var content = home.get(); // or home.content (the same)
    document.getElementById('content').innerText = content;
};
//# sourceMappingURL=Home.js.map