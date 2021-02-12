import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

function BookContextProvider(props){
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('bookList')) || [
    { title: 'name of wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 },
    { title: 'Peppi', author: 'astrid lindgren', id: 3 },
  ]);

  const [isBookListChange, setBookListChanged] = useState(false);



useEffect(() => {
  if(isBookListChange){
    localStorage.setItem('bookList', JSON.stringify(books))
  }
}, [isBookListChange])

  const addBook = (title, author) =>{
    setBooks([...books, {title: title, author: author, id: uuidv4() }])
    setBookListChanged(true);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
    setBookListChanged(true)
  }

  return(
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      { props.children}
    </BookContext.Provider>
  )



}
export default BookContextProvider;