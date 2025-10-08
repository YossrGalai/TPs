function add(a, b) {
    return a + b;
}
console.log(add(10, 4));
function greet(name, age) {
    if (age !== undefined) {
        console.log(`Bonjour ${name}, tu as ${age} ans.`);
    }
    else {
        console.log(`Bonjour ${name}`);
    }
}
greet("yossr");
greet("yossr", 21);
function power(base, exp = 2) {
    return base ** exp;
}
console.log(power(3));
console.log(power(2, 3));
function combine(a, b) {
    return a + b;
}
console.log(combine(5, 7));
console.log(combine("Hello, ", "TypeScipt !"));
export {};
//# sourceMappingURL=fonctions.js.map