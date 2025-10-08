let name: string = "Yossr";
let age: number = 21;
let isAdmin: boolean = true;

let scores: number[] = [10, 15, 20, 18];

let student: [string, number] = ["Ali", 22];

enum Role {
  User,
  Admin,
  SuperAdmin
}

let currentRole: Role = Role.Admin;

console.log("Nom :", name);
console.log("Âge :", age);
console.log("Admin :", isAdmin);
console.log("Scores :", scores);
console.log("Étudiant :", student[0], "âgé de", student[1]);
console.log("Rôle actuel :", currentRole);
