var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDist = function () {
        return this.x * this.y;
    };
    return Point;
})();
var p = new Point(10, 8);
var dist = p.getDist();
console.log('Distance: ', dist);
//# sourceMappingURL=global-module.js.map