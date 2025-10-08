//import {add} from './math.js';
//console.log(add(5,8));

import { add, subtract } from "./index.js";
import type {user} from './types.js';

const user1:user={id:1,name:'yossr'};

console.log("Résultat de 5 + 3 =", add(5, 3));
console.log("Résultat de 10 - 4 =", subtract(10, 4));
console.log("Utilisateur :", user1);