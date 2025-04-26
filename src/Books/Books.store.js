import { makeAutoObservable, runInAction } from "mobx";
import booksRepository from "./Books.repository";

export class BooksStore {
  books = [];
  privateBooks=[];
  viewMode = "all";

  constructor() {
    makeAutoObservable(this);
  }

  async loadBooks() {
    const books = await booksRepository.getBooks();
    runInAction(() => {
      this.books = books;
    });
  }

  async loadPrivateBooks() {
    const books = await booksRepository.getPrivateBooks();
    runInAction(() => {
      this.privateBooks = books;
    });
  }

  async addBook(book) {
    const added = await booksRepository.addBook(book);  
    if (added) {
      this.loadBooks();
      this.loadPrivateBooks();
    }
  }

  setViewMode(mode) {
    this.viewMode = mode;
  }

  get privateBooksCount() {
    return this.privateBooks.length;
  } 

  get displayBooks() {
    return this.viewMode === "all" ? this.books : this.privateBooks;
  }
}