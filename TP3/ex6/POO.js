class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Bonjour,je m'appelle ${this.name} et j'ai ${this.age} ans.`);
    }
}
class Student extends Person {
    school;
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
    study() {
        console.log(`${this.name} étudie à ${this.school}.`);
    }
}
const student = new Student("yossr", 21, "Université de Tunis");
student.greet();
student.study();
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const c = new Circle(5);
console.log("Aire du cercle :", c.area());
const r = new Rectangle(4, 6);
console.log("Aire du rectangle :", r.area());
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`${this.brand} est en train de rouler.`);
    }
}
const car = new Car("Toyota");
car.drive();
export {};
//# sourceMappingURL=POO.js.map