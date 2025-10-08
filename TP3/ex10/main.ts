import { ApiService, InMemoryRepository, Library } from "./index.js";
import type { livre } from "./index.js";

async function main() {
  const livres: livre[] = await ApiService.fetchBooks();

  const repo = new InMemoryRepository<livre>();
  livres.forEach(livre => repo.ajouter(livre));

  const bibliotheque = new Library(repo);

  console.log("📚 Liste des livres :", bibliotheque.listBooks());

  bibliotheque.emprunterBook(1);
  console.log("📕 Après emprunt :", bibliotheque.listBooks());

  bibliotheque.rendreBook(1);
  console.log("📗 Après retour :", bibliotheque.listBooks());
}

main();