var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
})();
var Car = (function () {
    function Car(data) {
        this.engine = data.engine;
    }
    return Car;
})();
///////////////////
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
//# sourceMappingURL=classes.js.map