let id: number | string;
id = 123;
id = "ABC123";

type A = { name: string };
type B = { age: number };

type AB = A & B;

let personne: AB = {
  name: "Ali",
  age: 25
};

type Status = "pending" | "done" | "canceled";

let currentStatus: Status;
currentStatus = "pending";
currentStatus = "done";

let valeurInconnue: unknown;
valeurInconnue = "Bonjour TypeScript";

if (typeof valeurInconnue === "string") {
  let longueur: number = (valeurInconnue as string).length;
  console.log("Longueur :", longueur);
}
