import type { livre } from "./models.js";
export interface Repository<T extends {
    id: number;
}> {
    ajouter(item: T): void;
    retirer(id: number): void;
    afficher(): T[];
    chercher(id: number): T | undefined;
}
export declare class InMemoryRepository<T extends {
    id: number;
}> implements Repository<T> {
    private items;
    ajouter(item: T): void;
    retirer(id: number): void;
    afficher(): T[];
    chercher(id: number): T | undefined;
}
export declare class Library {
    private repo;
    constructor(repo: Repository<livre>);
    ajouterLivre(book: livre): void;
    retirerLivre(id: number): void;
    listBooks(): livre[];
    searchByTitle(title: string): livre[];
    emprunterBook(id: number): void;
    rendreBook(id: number): void;
}
export declare class ApiService {
    static fetchBooks(): Promise<livre[]>;
}
//# sourceMappingURL=services.d.ts.map