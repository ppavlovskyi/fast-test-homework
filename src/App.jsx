import React from 'react'
import {BooksController} from "./Books/Books.controller";
import BooksView from './Books/Books.view'

const controller = new BooksController();

const App = () => {
  return <BooksView controller={controller} />
}

export default App;

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// // import { observer } from "mobx-react";

// import "./styles.css";
// import booksRepository from "./Books/Books.repository";

// function App() {
//   const [list, setList] = useState([]);

//   React.useEffect(() => {
//     async function load() {
//       const books = await booksRepository.getBooks();
//       setList(books);
//     }
//     load();
//   }, []);

//   return (
//     <div>
//       {list.map((book, i) => (
//         <div key={i}>
//           {book.author}: {book.name}
//         </div>
//       ))}
//       <button
//         onClick={() => {
//           alert("TBD");
//         }}
//       >
//         Add
//       </button>
//     </div>
//   );
// }