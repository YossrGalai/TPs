function ex7() {
  const notes = [12, 5, 17, 9, 20];

  const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
  console.log("Ex7 - Moyenne:", moyenne);

  const tri = [...notes].sort((a, b) => b - a);
  console.log("Ex7 - Tri décroissant:", tri);

  const admis = notes.filter(n => n >= 10);
  console.log("Ex7 - Notes ≥10:", admis);
}
