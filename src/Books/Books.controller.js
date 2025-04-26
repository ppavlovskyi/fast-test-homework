import {BooksStore} from "./Books.store";

export class BooksController {
  constructor() {
    this.store = new BooksStore();
    this.store.loadBooks();
    this.store.loadPrivateBooks();
  }

  get books() {
    return this.store.displayBooks;
  }

  addBook = () => {
    this.store.addBook({ name: "Book " + Date.now(), author: "Author" });
  }

  setViewMode = (mode) => {
    this.store.setViewMode(mode);
  };

  get privateBooksCount() {
    return this.store.privateBooksCount;
  }

  get currentViewMode() {
    return this.store.viewMode;
  }

  toggleViewMode = () => {
    this.store.setViewMode(
      this.store.viewMode === "all" ? "private" : "all"
    );
  };
}