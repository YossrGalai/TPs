let name = "Yossr";
let age = 21;
let isAdmin = true;
let scores = [10, 15, 20, 18];
let student = ["Ali", 22];
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
let currentRole = Role.Admin;
console.log("Nom :", name);
console.log("Âge :", age);
console.log("Admin :", isAdmin);
console.log("Scores :", scores);
console.log("Étudiant :", student[0], "âgé de", student[1]);
console.log("Rôle actuel :", currentRole);
export {};
//# sourceMappingURL=typebase.js.map