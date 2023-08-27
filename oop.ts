class Shape {
    info(): string {
        return "This is a Shape"
    }
    draw(): void {
        console.log("drawing a shape'");
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(wibth: number, height: number) {
        super()
        this.width = wibth;
        this.height = height;

    }
    area(): number {
        return this.width * this.height
    }
    info(): string {
        return "This is a Recktangle"
    }
    scale(factor: number):Rectangle{
        this.width*= factor;
        this.height*= factor;
        return this
    }
    static combineAreas(rectangle1: Rectangle, rectangle2: Rectangle): Rectangle {
        const totalWidth = rectangle1.width + rectangle2.width;
        const totalHeight = rectangle1.height + rectangle2.height;
        return new Rectangle(totalWidth, totalHeight);
    }
}

let rectangle1 = new Rectangle(2, 5);
console.log(rectangle1.area());
console.log(rectangle1);

class Square extends Rectangle {
    constructor(height: number) {
        super(height, height)
    }
    area(): number {
        return this.height * this.height
    }
    draw(): void {
        console.log("This is a square");

    }

}
let square1 = new Square(10);
console.log(square1.area());
console.log(square1);


class ColoredRectangle extends Rectangle {
    color: string;
    constructor(color: string, width: number, height: number) {
        super(width, height);
        this.color = color;
    }
    info(): string {
        return `This is a colored rectangle ${this.color}`
    }
}

class Triangle extends Shape {
    constructor() {
        super()
    }
    draw(): void {
        console.log("This is a triangle");

    }
}

class Circle extends Shape {
    constructor() {
        super()
    }
    draw(): void {
        console.log("This is a circle");

    }
}

function renderShapes(shapes: Shape[]): void {
    for (const shape of shapes) {
        shape.draw();
    }
}
