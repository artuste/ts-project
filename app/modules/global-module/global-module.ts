interface IPoint {
    getDist(): number;
}

class Point implements IPoint {
    constructor(public x: number,
                public y: number) {
    }
    getDist() {
        return this.x * this.y;
    }
}

var p: IPoint = new Point(10, 8);
var dist = p.getDist();

console.log('Distance: ', dist);