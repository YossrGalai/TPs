export class InMemoryRepository {
    items = [];
    ajouter(item) {
        const exists = this.items.some(i => i.id === item.id);
        if (exists)
            throw new Error(`L'élément avec id ${item.id} existe déjà.`);
        this.items.push(item);
    }
    retirer(id) {
        this.items = this.items.filter(i => i.id !== id);
    }
    afficher() {
        return [...this.items];
    }
    chercher(id) {
        return this.items.find(i => i.id === id);
    }
}
export class Library {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    ajouterLivre(book) {
        this.repo.ajouter(book);
    }
    retirerLivre(id) {
        this.repo.retirer(id);
    }
    listBooks() {
        return this.repo.afficher();
    }
    searchByTitle(title) {
        return this.repo.afficher().filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
    }
    emprunterBook(id) {
        const book = this.repo.chercher(id);
        if (!book)
            throw new Error("Livre introuvable");
        if (!book.available)
            throw new Error("Livre déjà emprunté");
        book.available = false;
    }
    rendreBook(id) {
        const book = this.repo.chercher(id);
        if (!book)
            throw new Error("Livre introuvable");
        book.available = true;
    }
}
export class ApiService {
    static async fetchBooks() {
        return [
            { id: 1, title: "Le Petit Prince", author: "Saint-Exupéry", year: 1943, available: true },
            { id: 2, title: "1984", author: "George Orwell", year: 1949, available: true },
            { id: 3, title: "Clean Code", author: "Robert C. Martin", year: 2008, available: true },
        ];
    }
}
//# sourceMappingURL=services.js.map