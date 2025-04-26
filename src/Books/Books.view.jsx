import React from 'react'
import { observer } from "mobx-react";

const BooksView = observer(
  ({ controller }) => {
    return (
      <div>
      <header>
        <h2>Your books: {controller.privateBooksCount}</h2>
        <button onClick={controller.toggleViewMode}>
          {controller.currentViewMode === "all" ? "Show Private Books" : "Show All Books"}
        </button>
      </header>
        {controller.books.map((book, i) => (
          <div key={i}>
            {book.author}: {book.name}
          </div>
        ))}
        <button onClick={controller.addBook}>Add Book</button>
      </div>
    )
  }
)

export default BooksView