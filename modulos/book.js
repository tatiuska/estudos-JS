// usando export default
export default class Book {
    constructor(title) {
        this.title = title;
    }
    printTitle() {
        return this.title; // troquei o console.log por return
    }
}