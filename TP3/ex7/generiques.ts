function identity<T>(value:T):T{
    return value;
}

console.log(identity<string>("Hello TS !"));

function getFirst<T>(arr: T[]):T | undefined{
    return arr[0];
}

console.log(getFirst<number>([1, 2, 3]));

class Repository<T>{
    items:T[]=[];

    add(item:T){
        this.items.push(item);
    }

    remove(item: T): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    getAll(): T[]{
        return this.items;
    }
}

const repo = new Repository<number>();
repo.add(1);
repo.add(2);
repo.remove(1);
console.log(repo.getAll());

interface ApiResponse<T>{
    data:T;
    error?:string;
}

const res: ApiResponse<string[]> = { data: ["yossr", "galai"] };
console.log(res);