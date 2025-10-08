export interface livre{
  id:number;
  title:string;
  author:string;
  year:number;
  available:boolean;
}

export type Role="User"|"Admin";

export abstract class personne{
    private id:number;
    private name:string;

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }

}

export class user extends personne{
    private role:Role="User";

    constructor(id:number,name:string){
        super(id,name);
    }
}

class admin extends personne{
    private role: Role="Admin";

    constructor(id:number,name:string){
        super(id,name);
    }
}
