function ex4() {
  const tab1 = [1, 2, 3];
  const tab2 = [4, 5, 6];
  const fusion = [...tab1, ...tab2];
  console.log("Ex4 - Fusion:", fusion);

  const obj = { a: 1, b: 2 };
  var copie = { ...obj };
  console.log("Ex4 - Copie:", copie);

  var copie = { ...copie, a: 5}
  console.log("Ex4 - Copie modifée :", copie);
}
