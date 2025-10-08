export class personne {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
export class user extends personne {
    role = "User";
    constructor(id, name) {
        super(id, name);
    }
}
class admin extends personne {
    role = "Admin";
    constructor(id, name) {
        super(id, name);
    }
}
//# sourceMappingURL=models.js.map