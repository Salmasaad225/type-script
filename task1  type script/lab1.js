//question 1
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
var x;
x = 3;
console.log(x);
var str = "Hello World";
console.log(str);
var bool = true;
console.log(bool);
var test;
test = [10, 39, true, "str"];
console.log(test);
test = false;
console.log(test);
var y;
y = 'Hello';
console.log(y);
y = 7;
console.log(y);
var arr;
arr = ["item1", "item2", "item3"];
console.log(arr);
arr = [2, 5, 8];
console.log(arr);
////////////////////////////////////////
//enum
var Level;
(function (Level) {
    Level[Level["easy"] = 9] = "easy";
    Level[Level["med"] = 6] = "med";
    Level[Level["hard"] = 3] = "hard";
})(Level || (Level = {}));
var lvl = "easy";
//  var lvl:string="med";
if (lvl === "easy") {
    console.log(" ".concat(Level.easy));
}
else if (lvl === "med") {
    console.log(" ".concat(Level.med));
}
else {
    console.log(" ".concat(Level.hard));
}
//////////////////////////////////////
function devide(num1, num2) {
    return this.num1 / this.num2;
}
console.log(devide(20, 4));
function devide2(num1, num2) {
    console.log(this.num1 / this.num2);
}
devide2(20, 4);
//generic fun
function ToDo(x) {
    void console.log(x);
}
ToDo({ name: "salma", age: 25 });
//class
var Student1 = /** @class */ (function () {
    function Student1(_name, _id) {
        this._name = _name;
        this._id = _id;
    }
    return Student1;
}());
// class Student{ 
//     Name:string;
//     Id:number;
//     BD:Date;
//  constructor(_name:string,_id:number){
//     this.Name=_name;
//     this.Id=_id;
//     
//  } 
// }
var std1 = new Student1("Ali", 1);
var std2 = new Student1("Ahmed", 2);
var std3 = new Student1("Mo", 3);
console.log(std1);
console.log(std2);
console.log(std3);
var Student = /** @class */ (function () {
    function Student(_n, _a, _add) {
        this.name = _n;
        this.age = _a;
        this.address = _add;
    }
    Student.prototype.getData = function () {
        console.log("Method not implemented.");
    };
    return Student;
}());
var std = new Student("ali", 23, "helwan2000");
std.getData();
////////////////////////22222222222222222////////////////////////////////
var Point2D = /** @class */ (function () {
    function Point2D(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    Point2D.prototype.Calc = function () {
        console.log(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    };
    return Point2D;
}());
var point = new Point2D(5, 5);
var result = point.Calc();
console.log(result);
///////////////////////3333333333333333333333////////////////////////////////
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(_x, _y, _z) {
        var _this = _super.call(this, _x, _y) || this;
        _this.z = _z;
        return _this;
    }
    Point3D.prototype.Calc = function () {
        console.log(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)));
    };
    return Point3D;
}(Point2D));
var point2 = new Point3D(5, 5, 5);
var result2 = point2.Calc();
console.log(result2);
