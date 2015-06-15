var Dashboard = (function () {
    function Dashboard(content) {
        this.content = content;
    }
    Dashboard.prototype.get = function () {
        return this.content;
    };
    Dashboard.prototype.set = function (value) {
        this.content = value;
    };
    return Dashboard;
})();
var dashboard = new Dashboard();
dashboard.set('Some text');
console.log('content', dashboard.get());
//# sourceMappingURL=classes.js.map