class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    static distance (point1, point2) {
        let dx = (point2.x - point1.x) * (point2.x - point1.x);
        let dy = (point2.y - point1.y) * (point2.y - point1.y);
        return Math.sqrt(dx + dy);
    }
}

// let p1 = new Point(5, 5);
// let p2 = new Point(9, 8);
// console.log(Point.distance(p1, p2));
