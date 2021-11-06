class Point{
    constructor(x,y){
        this.x =x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x -b.x;
        const dy = a.y - b.y

        return Math.hypot(dx,dy)
    }

    static add(){
        let c = 6;
        let d = 7;
        return c+d;
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

console.log(p1.distance); //undefined
console.log(p2.distance); //undefined

console.log(Point.distance(p1,p2)); //7.0710678118654755

console.log(p1.add); //undefined
console.log(p2.add); //undefined
console.log(Point.add()); //13
