class Storage {
    constructor(startStorageData) {
        this.items = startStorageData
    }
    getItems = () => this.items;
    addItem = (item) => this.items.push(item);
    removeItem = (item) => this.items.indexOf(item) !== -1 ? this.items.splice(this.items.indexOf(item), 1) : null;
}

const storage = new Storage([
 'Нанітоіди',
 'Пролонгер',
 'Залізні жупи',
 'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]