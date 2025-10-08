import type { livre } from "./models.js";

export interface Repository<T extends { id: number }> {
  ajouter(item: T): void;
  retirer(id: number): void;
  afficher(): T[];
  chercher(id: number): T | undefined;
}

export class InMemoryRepository<T extends { id: number }> implements Repository<T> {
  private items:T[]=[];

  ajouter(item: T): void {
    const exists = this.items.some(i => i.id === item.id);
    if (exists) throw new Error(`L'élément avec id ${item.id} existe déjà.`);
    this.items.push(item);
  }

  retirer(id: number): void {
    this.items = this.items.filter(i => i.id !== id);
  }

  afficher(): T[] {
    return [...this.items];
  }

  chercher(id: number): T | undefined {
    return this.items.find(i => i.id === id);
  }
}

export class Library {
  constructor(private repo: Repository<livre>) {}

  ajouterLivre(book: livre): void {
    this.repo.ajouter(book);
  }

  retirerLivre(id: number): void {
    this.repo.retirer(id);
  }

  listBooks(): livre[] {
    return this.repo.afficher();
  }

  searchByTitle(title: string): livre[] {
    return this.repo.afficher().filter(b =>
      b.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  emprunterBook(id: number): void {
    const book = this.repo.chercher(id);
    if (!book) throw new Error("Livre introuvable");
    if (!book.available) throw new Error("Livre déjà emprunté");
    book.available = false;
  }

  rendreBook(id: number): void {
    const book = this.repo.chercher(id);
    if (!book) throw new Error("Livre introuvable");
    book.available = true;
  }
}

export class ApiService {
  static async fetchBooks(): Promise<livre[]> {
    return [
      { id: 1, title: "Le Petit Prince", author: "Saint-Exupéry", year: 1943, available: true },
      { id: 2, title: "1984", author: "George Orwell", year: 1949, available: true },
      { id: 3, title: "Clean Code", author: "Robert C. Martin", year: 2008, available: true },
    ];
  }
}
