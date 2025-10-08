export interface livre {
    id: number;
    title: string;
    author: string;
    year: number;
    available: boolean;
}
export type Role = "User" | "Admin";
export declare abstract class personne {
    private id;
    private name;
    constructor(id: number, name: string);
}
export declare class user extends personne {
    private role;
    constructor(id: number, name: string);
}
//# sourceMappingURL=models.d.ts.map