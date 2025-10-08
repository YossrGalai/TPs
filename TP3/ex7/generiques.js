function identity(value) {
    return value;
}
console.log(identity("Hello TS !"));
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([1, 2, 3]));
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    getAll() {
        return this.items;
    }
}
const repo = new Repository();
repo.add(1);
repo.add(2);
repo.remove(1);
console.log(repo.getAll());
const res = { data: ["yossr", "galai"] };
console.log(res);
export {};
//# sourceMappingURL=generiques.js.map