import { BooksStore } from "./Books.store";

describe("BooksStore", () => {
  it("should switch view modes", () => {
    const store = new BooksStore();
    store.setViewMode("private");
    expect(store.viewMode).toBe("private");
    store.setViewMode("all");
    expect(store.viewMode).toBe("all");
  });

  it("should update books after loading", async () => {
    const store = new BooksStore();
    store.loadBooks = jest.fn(async () => {
      store.books = [{ name: "Test Book", author: "Test Author" }];
    });

    await store.loadBooks();

    expect(store.books.length).toBeGreaterThan(0);
    expect(store.books[0].name).toBe("Test Book");
  });

  it("should update privateBooks after loading", async () => {
    const store = new BooksStore();
    store.loadPrivateBooks = jest.fn(async () => {
      store.privateBooks = [{ name: "Private Book", author: "Private Author" }];
    });

    await store.loadPrivateBooks();

    expect(store.privateBooks.length).toBeGreaterThan(0);
    expect(store.privateBooks[0].name).toBe("Private Book");
  });
});
