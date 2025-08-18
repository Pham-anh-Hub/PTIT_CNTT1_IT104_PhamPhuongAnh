"use strict";
class DataStore {
    constructor(data) {
        this.data = data;
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        this.data.splice(index, 1);
    }
}
const newData = new DataStore([]);
newData.add(6);
newData.add(7);
newData.add(8);
console.log(newData.getAll());
newData.remove(1);
console.log("Sau khi remove: ", newData.getAll());
