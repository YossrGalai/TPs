class Person{
  name:string;
  age:number;

  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }

  greet():void{
    console.log(`Bonjour,je m'appelle ${this.name} et j'ai ${this.age} ans.`);
  }
}

class Student extends Person{
  school:string;

  constructor(name:string,age:number,school:string){
    super(name,age);
    this.school=school;
  }

  study():void{
    console.log(`${this.name} étudie à ${this.school}.`);
  }
}

const student = new Student("yossr",21,"Université de Tunis");
student.greet();
student.study();

abstract class Shape {
  abstract area():number;
}

class Circle extends Shape{
  radius: number;

  constructor(radius:number){
    super();
    this.radius=radius;
  }

  area():number{
    return Math.PI*this.radius**2;
  }
}

class Rectangle extends Shape{
  width:number;
  height:number;

  constructor(width:number,height:number){
    super();
    this.width=width;
    this.height=height;
  }

  area(): number{
    return this.width*this.height;
  }
}

const c=new Circle(5);
console.log("Aire du cercle :",c.area());

const r=new Rectangle(4,6);
console.log("Aire du rectangle :", r.area());

interface Drivable {
  drive(): void;
}

class Car implements Drivable {
  brand: string;

  constructor(brand:string) {
    this.brand = brand;
  }

  drive():void{
    console.log(`${this.brand} est en train de rouler.`);
  }
}

const car=new Car("Toyota");
car.drive();