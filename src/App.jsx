import React from 'react'
import {BooksController} from "./Books/Books.controller";
import BooksView from './Books/Books.view'

const controller = new BooksController();

const App = () => {
  return <BooksView controller={controller} />
}

export default App;
