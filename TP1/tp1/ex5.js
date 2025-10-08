function ex5() {
  const livre = {
    titre: "La Belle et La Bête",
    auteur: "Alexandro",
    annee: 1985,
    getInfo() {
      return `${this.titre} écrit par ${this.auteur} en ${this.annee}`;
    }
  };
  console.log("Ex5:", livre.getInfo());
}
