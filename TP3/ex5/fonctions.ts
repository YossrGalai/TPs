function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10,4));

function greet(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`Bonjour ${name}, tu as ${age} ans.`);
  } else {
    console.log(`Bonjour ${name}`);
  }
}

greet("yossr");
greet("yossr", 21);

function power(base: number, exp: number = 2): number {
  return base ** exp;
}

console.log(power(3));
console.log(power(2, 3));

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(5, 7));
console.log(combine("Hello, ", "TypeScipt !"));
