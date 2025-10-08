let taches = [];

if (localStorage.getItem("taches")) {
    taches = JSON.parse(localStorage.getItem("taches"));
}

function sauvegarderTaches() {
    localStorage.setItem("taches", JSON.stringify(taches));
}

function terminerTache(index) {
    taches[index].terminee = !taches[index].terminee;
    sauvegarderTaches();
    afficherTaches();
}

function supprimerTache(index) {
    taches.splice(index, 1);
    sauvegarderTaches();
    afficherTaches();
}

function ajouterTache() {
    const input = document.getElementById("champTache");
    const texte = input.value.trim();
    if (texte !== "") {
        taches.push({ texte: texte, terminee: false });
        sauvegarderTaches();
        afficherTaches();
        input.value = "";
    }
}

function supprimerTout() {
    taches = [];
    sauvegarderTaches();
    afficherTaches();
}

function afficherTaches() {
    const liste = document.querySelector("ul");
    liste.innerHTML = "";
    const recherche = document.getElementById("recherche").value.toLowerCase();

    let compteurTerminees = 0;
    let compteurEnCours = 0;

    for (let i = 0; i < taches.length; i++) {
        if (!taches[i].texte.toLowerCase().includes(recherche)) continue;

        const li = document.createElement("li");
        li.textContent = taches[i].texte + " ";

        if (taches[i].terminee) {
            li.style.textDecoration = "line-through";
            li.style.color = "gray";
            compteurTerminees++;
        } else {
            compteurEnCours++;
        }

        const boutonTerminer = document.createElement("button");
        boutonTerminer.textContent = "Terminer";
        boutonTerminer.addEventListener("click", function () {
            terminerTache(i);
        });

        const boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer";
        boutonSupprimer.addEventListener("click", function () {
            supprimerTache(i);
        });

        li.appendChild(boutonTerminer);
        li.appendChild(boutonSupprimer);
        liste.appendChild(li);
    }

    document.getElementById("terminées").textContent = "Terminées : " + compteurTerminees;
    document.getElementById("encours").textContent = "En cours : " + compteurEnCours;
}

document.getElementById("ajouter").addEventListener("click", ajouterTache);
document.getElementById("afficher").addEventListener("click", afficherTaches);
document.getElementById("supprimerTout").addEventListener("click", supprimerTout);

document.getElementById("champTache").addEventListener("keypress", function(event) {
    if (event.key === "Enter") ajouterTache();
});

document.getElementById("recherche").addEventListener("input", afficherTaches);

afficherTaches();
