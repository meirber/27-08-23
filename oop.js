var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.info = function () {
        return "This is a Shape";
    };
    Shape.prototype.draw = function () {
        console.log("drawing a shape'");
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(wibth, height) {
        var _this = _super.call(this) || this;
        _this.width = wibth;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.info = function () {
        return "This is a Recktangle";
    };
    return Rectangle;
}(Shape));
var rectangle1 = new Rectangle(2, 5);
console.log(rectangle1.area());
console.log(rectangle1);
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(height) {
        return _super.call(this, height, height) || this;
    }
    Square.prototype.area = function () {
        return this.height * this.height;
    };
    Square.prototype.draw = function () {
        console.log("This is a square");
    };
    return Square;
}(Rectangle));
var square1 = new Square(10);
console.log(square1.area());
console.log(square1);
var ColoredRectangle = /** @class */ (function (_super) {
    __extends(ColoredRectangle, _super);
    function ColoredRectangle(color, width, height) {
        var _this = _super.call(this, width, height) || this;
        _this.color = color;
        return _this;
    }
    ColoredRectangle.prototype.info = function () {
        return "This is a colored rectangle ".concat(this.color);
    };
    return ColoredRectangle;
}(Rectangle));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super.call(this) || this;
    }
    Triangle.prototype.draw = function () {
        console.log("This is a triangle");
    };
    return Triangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super.call(this) || this;
    }
    Circle.prototype.draw = function () {
        console.log("This is a circle");
    };
    return Circle;
}(Shape));
function renderShapes(shapes) {
    for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
        var shape = shapes_1[_i];
        shape.draw();
    }
}
