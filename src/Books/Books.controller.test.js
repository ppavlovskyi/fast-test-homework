import { BooksController } from "./Books.controller";

describe("BooksController", () => {
  it("should toggle view mode", () => {
    const controller = new BooksController();
    controller.store.setViewMode = jest.fn();

    controller.store.viewMode = "all";
    controller.toggleViewMode();
    expect(controller.store.setViewMode).toHaveBeenCalledWith("private");

    controller.store.viewMode = "private";
    controller.toggleViewMode();
    expect(controller.store.setViewMode).toHaveBeenCalledWith("all");
  });

  it("should add book and call addBook in store", () => {
    const controller = new BooksController();
    controller.store.addBook = jest.fn();

    controller.addBook();

    expect(controller.store.addBook).toHaveBeenCalled();
  });

  it("should add a book and trigger store's addBook method with correct payload", async () => {
    const controller = new BooksController();

    controller.store.addBook = jest.fn(async (book) => {
      controller.store.books.push(book);
    });

    const bookBefore = controller.books.length;
    await controller.addBook();

    expect(controller.store.addBook).toHaveBeenCalled();
    expect(controller.books.length).toBeGreaterThan(bookBefore);
  });
});
